import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { dictionary } from '../utils/dictionaryEn'

const NUM_ROWS = 6;

interface GameState {
    initGame: boolean
    resetGame: boolean
    gameWord: string,
    letters: string[][]
    styles: string[][]
}

interface LetterChange {
    letter: string
    row: number
}

interface StyleChange {
    styles: string[]
    row: number
}


const initialState: GameState = {
    initGame: false,
    gameWord: '',
    resetGame: false,
    letters: Array.from({ length: NUM_ROWS }, () => ['', '', '', '', '']),
    styles: Array.from({ length: NUM_ROWS }, () => ['', '', '', '', '']),
};

const gameSlice = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
        initializeGame(state) {
            state.gameWord = dictionary[Math.floor(Math.random() * dictionary.length)].toUpperCase();
            state.initGame = true;
        },
        resetGame(state) {
            state.initGame = true;
            state.letters = Array.from({ length: NUM_ROWS }, () => ['', '', '', '', '']);
            state.styles = Array.from({ length: NUM_ROWS }, () => ['', '', '', '', '']);
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
        }
    }
});

export const gameActions = gameSlice.actions;

export default gameSlice;