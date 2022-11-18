import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./reducers/commentSlice";
import postSlice from "./reducers/postSlice";
import userSlice from "./reducers/userSlice";

const store = configureStore({
    reducer:{
        auth: userSlice,
        posts: postSlice,
        comments: commentSlice
    }
});


export default store;