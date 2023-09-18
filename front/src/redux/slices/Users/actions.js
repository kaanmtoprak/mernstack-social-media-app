import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleUser = createAsyncThunk(
    "users/getSingleUser",
    async (data) => {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/get-single-user?username=${data}`);
        return await res.data;
    }
);
export const followUser = createAsyncThunk(
    "users/followUser",
    async (data) => {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/follow-user`,data);
        return await res.data;
    }
);
