import { createStore } from "redux";

const counterReducer = (state, action) => {
    if (action.type = "INCREMENT") {
        return counter = state.counter + 1;
    }
    if (action.type = "DECREMENT") {
        return 
    }
    return state
    
}

const store = createStore(counterReducer);

export store;

