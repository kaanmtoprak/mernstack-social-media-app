import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleUser = createAsyncThunk(
    "users/getSingleUser",
    async (data) => {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/get-single-user?username=${data}`);
        return await res.data;
    }
);
