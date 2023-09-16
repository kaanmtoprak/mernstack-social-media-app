import {configureStore} from '@reduxjs/toolkit';
import { postsSlice, usersSlice } from './slices';

export const store = configureStore({
    reducer:{
        posts: postsSlice,
        users: usersSlice,

    }
})