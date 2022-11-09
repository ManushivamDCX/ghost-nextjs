import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from './index';

type Post = {
    title?: string,
    slug?: string,
    id?: string,
    html?: string
  }

export interface CounterState {
  posts: Post[],
  post: Post
}

const initialState: CounterState = {
  posts: [],
  post: {}
}

export const counterSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    sample: (state, action: PayloadAction<number>) => {
      
    },
  }
})

// Action creators are generated for each case reducer function
export const { sample } = counterSlice.actions

export const selectBlogState = (state: AppState) => state.blog;

export default counterSlice.reducer