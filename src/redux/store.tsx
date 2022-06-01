import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slice';

const store = configureStore({
    reducer: {
        todos: reducer,
    }
})

export default store;

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;