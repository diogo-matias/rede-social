import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit'
import { getImages } from '../../../services/images/api'

export const fetchImages = createAsyncThunk(
    'posts/getImages',
    async ( route : string) => {
      const response = await getImages(route)
       return response
    }
)

const imageAdapter = createEntityAdapter({
    selectId: (state: any) => state.id ,

})

interface initialState {
    images: any,
    data?: any,

}

const initialState: initialState = {
    images: imageAdapter.getInitialState()
}

const imageSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {

    },
    extraReducers:({addCase}) => {
        addCase(fetchImages.fulfilled, (state, {payload}: any) => {
            imageAdapter.addMany(state.images, payload.photos)
            state.data = payload
        })
    }
})

export default imageSlice.reducer
export const { selectAll } = imageAdapter.getSelectors()