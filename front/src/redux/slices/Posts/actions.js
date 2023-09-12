import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (data) => {
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/post/all?owner=${data}`);
        return await res.data;
    }
);
