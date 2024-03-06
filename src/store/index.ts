import { configureStore } from "@reduxjs/toolkit";

// slices

import uiSlice from "./ui-slice";


export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
