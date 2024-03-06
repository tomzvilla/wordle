import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
    showNotification: boolean
    notificationText: string
    initGame: boolean
}

const initialState: UIState = {
    showNotification: false,
    notificationText: '',
    initGame: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        showNotification(state, action: PayloadAction<string>) {
            state.notificationText = action.payload;
            state.showNotification = true;
        },
        hideNotification(state) {
            state.showNotification = false;
        },
        initGame(state) {
            state.initGame = true;
        },
        quitGame(state) {
            state.initGame = false;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;