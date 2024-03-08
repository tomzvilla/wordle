import React from 'react'
import backspace from '../assets/img/backspace.svg'
import { useAppSelector } from '../hooks/hooks'

interface KeyProps {
    letter: string,
    big?: boolean
    currentRow: number
    makeGuess: Function,
    handleInputLetter: Function
    handleRemoveLetter: Function
}

const Key:React.FC<KeyProps> = ({ letter, big, currentRow, makeGuess, handleInputLetter, handleRemoveLetter }) => {
  const letters = useAppSelector(state => state.game.letters);
  const playingAnimation = useAppSelector(state => state.ui.playingAnimation);
  const usedKeys = useAppSelector(state => state.game.usedKeys);

  const handleKeyDown = (letter: string): void => {
    if(playingAnimation){
      return;
    }
    if(/[a-zA-Z]/.test(letter) && letter.length === 1) {
      handleInputLetter(letter);
    } else if(letter === 'Backspace') {
      handleRemoveLetter();
    } else if(letter === 'Enter') {
      if(letters[currentRow].findIndex(l => l === '') !== -1) {
        return;
      }
      makeGuess();
    }
  }

  const key = usedKeys.find(k => Object.keys(k)[0] === letter);
  const getBackgroundStyle = (): string => {
    let style = 'bg-[#d3d6da] dark:bg-[#818384]';
    if(key) {
      style = Object.values(key)[0];
    }
    return style;
  }
  return (
      !big ?
      <button
        onClick={() => handleKeyDown(letter)}
        className={`${getBackgroundStyle()} w-[44px] h-[56px] m-1 text-lg rounded-md cursor-pointer font-bold border-0 text-center flex items-center justify-center dark:text-white`}
      >
        { letter }
      </button>
      :
      <button
        onClick={() => handleKeyDown(letter)}
        className='w-[65px] h-[56px] m-1 text-lg bg-[#d3d6da] rounded-md cursor-pointer font-bold border-0 text-center flex items-center justify-center dark:text-white dark:bg-[#818384]'
      >
      { letter === 'Enter' ? letter : <img className='dark:invert' src={backspace}></img> }
      </button>

  )
}

export default Key