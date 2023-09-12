import {configureStore} from '@reduxjs/toolkit';
import { postsSlice } from './slices';

export const store = configureStore({
    reducer:{
        posts: postsSlice,

    }
})