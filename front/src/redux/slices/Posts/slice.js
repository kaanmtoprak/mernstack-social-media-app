import {createSlice} from "@reduxjs/toolkit";
import {getPosts} from "./actions";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        isLoading: true,
        error: null,
        pending: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.isLoading = true;
                state.pending = true;
            })
            .addCase(getPosts.fulfilled, (state, {payload}) => {
                state.posts = payload;
                state.isLoading = false;
            })
            .addCase(getPosts.rejected, (state, {error}) => {
                state.isLoading = false;
                state.error = error.message;
            });
    },
})

export default postsSlice.reducer;