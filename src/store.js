import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slices/MainSlice";


const store = configureStore({
    reducer:{
        'main': mainSlice
    }
});


export default store;