import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        check : false
    },
    reducers: {
        setCheck: (state, action) => {
            state.check = action.payload;
        },
    }
});


export const { setCheck } = mainSlice.actions;


export default mainSlice.reducer;