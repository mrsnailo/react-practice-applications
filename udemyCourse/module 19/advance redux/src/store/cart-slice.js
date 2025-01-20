import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem(state, action) {
            // Check if the item already exists in the cart
            const index = state.findIndex((eachItem) => eachItem.item === action.payload.item);

            if (index !== -1) {
                // Item exists, update quantity
                state[index].quantity += 1;
            } else {
                // Item doesn't exist, add new item
                state.push(action.payload);
            }
        },
        removeItem(state, action) {
            // Find the item in the cart
            const index = state.findIndex((item) => item.item === action.payload.item);
            if (index !== -1) {
                // Mark the cart as changed
                if (state[index].quantity > 1) {
                    // Reduce quantity if greater than 1
                    state[index].quantity -= 1;
                } else {
                    // Remove item if quantity is 1
                    state.splice(index, 1);
                }
            }
        },
        replaceByFirebase(state, action) {
            // Replace cart with fetched data
           return action.payload;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
