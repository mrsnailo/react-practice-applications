import { configureStore } from "@reduxjs/toolkit";

import uiSLice from "./ui-slice";

import cartSlice from "./cart-slice";

const myStore = configureStore({
    reducer: { uiReducer: uiSLice.reducer, cartReducer: cartSlice.reducer }
});

export default myStore;