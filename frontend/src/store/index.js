import { configureStore } from "@reduxjs/toolkit";
import globalReducer from './slice/globalSlice';

export const store = configureStore({
    reducer: {
        global: globalReducer
    },
});