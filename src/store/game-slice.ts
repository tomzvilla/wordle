import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { dictionary } from '../utils/dictionaryEn'

const NUM_ROWS = 6;

interface LetterChange {
    letter: string
    row: number
}

interface StyleChange {
    styles: string[]
    row: number
}

interface KeysChange {
    [key: string]: string
}

interface GameState {
    initGame: boolean
    resetGame: boolean
    gameWord: string,
    letters: string[][]
    styles: string[][]
    usedKeys: KeysChange[]
}

const initialState: GameState = {
    initGame: false,
    gameWord: '',
    resetGame: false,
    letters: Array.from({ length: NUM_ROWS }, () => ['', '', '', '', '']),
    styles: Array.from({ length: NUM_ROWS }, () => ['', '', '', '', '']),
    usedKeys: [],

};

const gameSlice = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
        initializeGame(state) {
            state.gameWord = dictionary[Math.floor(Math.random() * dictionary.length)].toUpperCase();
            state.initGame = true;
            state.usedKeys = [];
        },
        resetGame(state) {
            state.initGame = true;
            state.letters = Array.from({ length: NUM_ROWS }, () => ['', '', '', '', '']);
            state.styles = Array.from({ length: NUM_ROWS }, () => ['', '', '', '', '']);
            state.usedKeys = [];
            state.gameWord = dictionary[Math.floor(Math.random() * dictionary.length)].toUpperCase();
           
        },
        setLetter(state, action: PayloadAction<LetterChange>) {
            const { letter, row } = action.payload;
            const currentRowState = [...state.letters[row]];
            const index = currentRowState.findIndex(l => l === '');
            if(index !== -1) {
              currentRowState[index] = letter.toUpperCase();
            }
            state.letters = {
                ...state.letters,
                [row]: currentRowState
            };
        },
        removeLetter(state, action: PayloadAction<number>) {
            const row = action.payload;
            const currentRowState = [...state.letters[row]];
            const index = currentRowState.findIndex(l => l === '');
            if(index !== -1) {
              currentRowState[index - 1] = '';
            } else {
              currentRowState[4] = '';
            }
            state.letters = {
                ...state.letters,
                [row]: currentRowState
            };
        },
        setStyles(state, action: PayloadAction<StyleChange>) {
            const { styles, row } = action.payload;
            const newStyles = state.styles.map((rowStyles, index) => {
                if (index === row) {
                  return styles;
                }
                return rowStyles;
            });
            state.styles = newStyles;
        },
        quitGame(state) {
            state.initGame = false;
        },
        markLetter(state, action: PayloadAction<KeysChange>) {
            const prevUsedKeys = [...state.usedKeys];
            const index = prevUsedKeys.findIndex(k => Object.keys(k)[0] === Object.keys(action.payload)[0])
            if(index !== -1) {
                prevUsedKeys[index] = action.payload;
            } else {
                prevUsedKeys.push(action.payload);
            }
            state.usedKeys = prevUsedKeys;
        }
    }
});

export const gameActions = gameSlice.actions;

export default gameSlice;