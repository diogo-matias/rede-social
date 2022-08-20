import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { getPosts } from "../../../services/posts/api";
import { State } from "../rootReducer";

export const fetchPosts = createAsyncThunk(
  "posts/getPosts",
  async (route: string) => {
    const response = await getPosts(route);
    return response;
  }
);

const postsAdapter = createEntityAdapter({
  selectId: (state: any) => state.id,
});

const postsSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(fetchPosts.fulfilled, (state, { payload }: any) => {
      postsAdapter.addMany(state, payload);
    });
  },
});

export default postsSlice.reducer;
export const postsSelector = (state: State) => state.posts;
export const { selectAll } = postsAdapter.getSelectors(postsSelector);
