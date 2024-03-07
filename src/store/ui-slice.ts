import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
    showNotification: boolean
    notificationText: string
    initGame: boolean
    showAlert: boolean
    alertText: UIAlert
    playingAnimation: boolean
}

interface UIAlert {
    text: string
    gameWord?: string
}

const initialState: UIState = {
    showNotification: false,
    notificationText: '',
    initGame: false,
    showAlert: false,
    alertText: {
        text: 'You have won!',
        gameWord: ''
    },
    playingAnimation: false,
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
        },
        showAlert(state, action: PayloadAction<UIAlert>) {
            state.showAlert = true;
            state.alertText.text = action.payload.text;
            state.alertText.gameWord = action.payload?.gameWord;
        },
        closeAlert(state) {
            state.showAlert = false;
        },
        togglePlayingAnimation(state) {
            state.playingAnimation = !state.playingAnimation;
        },
        endAnimation(state) {
            state.playingAnimation = false
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;