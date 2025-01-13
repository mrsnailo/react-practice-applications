import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "Authenication",
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;

export const authAction = authSlice.actions;

export default store;
