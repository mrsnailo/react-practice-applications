import { createSlice } from "@reduxjs/toolkit";

const uiSLice = createSlice({
    name: "ui",
    initialState: { isCartOpen: false, notification: null },
    reducers: {
        toggle(state) {
            state.isCartOpen = !state.isCartOpen;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        },
        hideNotification(state){
            state.notification = null;
        }
    }
})

export const uiActions = uiSLice.actions;

export default uiSLice;