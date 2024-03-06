import { configureStore } from "@reduxjs/toolkit";

// slices

import uiSlice from "./ui-slice";
import gameSlice from "./game-slice";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        game: gameSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
