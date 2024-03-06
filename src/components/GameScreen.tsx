import Row from './Row'
import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { uiActions } from '../store/ui-slice'
import { gameActions } from '../store/game-slice'
import { dictionary } from '../utils/dictionaryEn'

const GameScreen = () => {

  const dispatch = useAppDispatch()
  const [currentRow, setCurrentRow] = useState<number>(0)
  const [shouldShake, setShouldShake] = useState<boolean>(false)

  const gameWord = useAppSelector(state => state.game.gameWord)
  const letters = useAppSelector(state => state.game.letters)
  const styles = useAppSelector(state => state.game.styles)
  const playingAnimation = useAppSelector(state => state.ui.playingAnimation)

  console.log(gameWord)

  const handleInputLetter = (letter: string): void => {
    dispatch(gameActions.setLetter({
      letter: letter,
      row: currentRow
    }))
  }

  const handleRemoveLetter = (): void => {
    dispatch(gameActions.removeLetter(currentRow))
  }

  const handleGameEnd = (won: boolean): void => {
    setTimeout(() => {
      if(won) {
        dispatch(uiActions.showAlert({
          text: 'You have won! ⭐'
        }))
      } else {
        dispatch(uiActions.showAlert({
          text: 'You have lost 💔',
          gameWord: gameWord
        }))
      }
      setCurrentRow(0);
    }, 2100)
  }

  const handleKeyDown = (e: KeyboardEvent): void => {
    e.preventDefault();
    if(playingAnimation){
      return
    }
    if(/[a-zA-Z]/.test(e.key) && e.key.length === 1) {
      handleInputLetter(e.key)
    } else if(e.key === 'Backspace') {
      handleRemoveLetter()
    } else if(e.key === 'Enter') {
      if(letters[currentRow].findIndex(l => l === '') !== -1) {
        return
      }
      
      makeGuess()
      
    }
  }

  const checkWordExists = (word: string): boolean => {
    return dictionary.findIndex(w => w.toUpperCase() === word) !== -1;
  }

  const makeGuess = () => {
    let styles: string[] = []
    if(!checkWordExists(letters[currentRow].join(''))) {
      setShouldShake(true)
      dispatch(uiActions.showNotification('Not in word list'))
      setTimeout(() => {
        setShouldShake(false);
        dispatch(uiActions.hideNotification());
      }, 700);
      return
    } else {
      if(letters[currentRow].join('') === gameWord) {
        styles = ['bg-[#43a047]', 'bg-[#43a047]', 'bg-[#43a047]', 'bg-[#43a047]', 'bg-[#43a047]'];
        handleGameEnd(true)
      } else {
        dispatch(uiActions.togglePlayingAnimation())
        letters[currentRow].forEach((letter, index) => {
          if(letter === gameWord.charAt(index)) {
            styles.push('bg-[#43a047]');
          } else if(gameWord.includes(letter)) {
            styles.push('bg-[#e4a81d]');
          } else {
            styles.push('bg-[#757575]')
          }
        });
        if(currentRow === 5) {
          handleGameEnd(false)
        }
      }
      setCurrentRow(currentRow => currentRow + 1)
    }
    dispatch(gameActions.setStyles({
      styles: styles,
      row: currentRow
    }))
    
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
  

  return (
    <main className='w-full h-[80%] flex flex-col items-center justify-center py-5'>
      {
        Array.from({ length: 6 }).map((_, index) => (
          <Row 
            key={index}
            letters={letters[index]} 
            styles={styles[index]} 
            rowCompleted={index < currentRow} 
            shouldShake={index === currentRow ? shouldShake : false}
          />
        ))
      }
    </main>
  )
}

export default GameScreen