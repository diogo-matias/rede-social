import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit'
import { getPosts } from '../../../services/posts/api'

export const fetchPosts = createAsyncThunk(
    'posts/getPosts',
    async ( route : string) => {
      const response = await getPosts(route)
       return response
    }
)

const postsAdapter = createEntityAdapter({
    selectId: (state: any) => state.id
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(),
    reducers: {

    },
    extraReducers:({addCase}) => {
        addCase(fetchPosts.fulfilled, (state, {payload}: any) => {
            postsAdapter.addMany(state, payload)
        })
    }
})

export default postsSlice.reducer