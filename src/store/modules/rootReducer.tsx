import { combineReducers } from '@reduxjs/toolkit'
import postsSlice from './posts/postsSlice'
import imageSlice from './images/imagesSlice'

const rootReducer = combineReducers({
    posts: postsSlice,
    images: imageSlice,
})

export default rootReducer
export type State = ReturnType<typeof rootReducer>