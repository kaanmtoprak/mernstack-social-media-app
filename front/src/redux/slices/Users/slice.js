import {createSlice} from "@reduxjs/toolkit";
import {followUser, getSingleUser} from "./actions";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        user:{},
        isLoading: true,
        error: null,
        pending: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSingleUser.pending, (state) => {
                state.isLoading = true;
                state.pending = true;
            })
            .addCase(getSingleUser.fulfilled, (state, {payload}) => {
                state.user = payload;
                state.isLoading = false;
            })
            .addCase(getSingleUser.rejected, (state, {error}) => {
                state.isLoading = false;
                state.error = error.message;
            })
            .addCase(followUser.fulfilled, (state, {payload}) => {
                state.user = payload;
                state.isLoading = false;
            })
    },
})

export default usersSlice.reducer;