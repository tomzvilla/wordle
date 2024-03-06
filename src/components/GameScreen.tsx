import React from 'react'
import Row from './Row'
import { useState, useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { uiActions } from '../store/ui-slice'

interface LettersState {
  [key: number]: string[]
}

interface StylesState {
  [key: number]: string[]
}

interface HomeProps {
  dictionary: string[]
}

const Home: React.FC<HomeProps> = ({ dictionary }) => {

  const [letters, setLetters] = useState<LettersState>({
    0: ['', '','','',''],
    1: ['', '','','',''],
    2: ['', '','','',''],
    3: ['', '','','',''],
    4: ['', '','','',''],
    5: ['', '','','',''],
  })

  const [styles, setStyles] = useState<StylesState>({
    0: ['', '','','',''],
    1: ['', '','','',''],
    2: ['', '','','',''],
    3: ['', '','','',''],
    4: ['', '','','',''],
    5: ['', '','','',''],
  })

  const [currentRow, setCurrentRow] = useState<number>(0)

  const [shouldShake, setShouldShake] = useState<boolean>(false)

  const [gameWord] = useState<string>(dictionary[Math.floor(Math.random() * dictionary.length)].toUpperCase())

  const dispatch = useAppDispatch()

  console.log(gameWord)

  const handleInputLetter = (letter: string): void => {
    setLetters(prevLetters => {
      const currentRowState = [...letters[currentRow]];
      const index = currentRowState.findIndex(l => l === '');
      if(index !== -1) {
        currentRowState[index] = letter.toUpperCase();
      }
      return {
        ...prevLetters,
        [currentRow]: currentRowState
      }
    })
  }

  const handleRemoveLetter = (): void => {
    setLetters(prevLetters => {
      const currentRowState = [...letters[currentRow]];
      const index = currentRowState.findIndex(l => l === '');
      if(index !== -1) {
        currentRowState[index - 1] = '';
      } else {
        currentRowState[4] = '';
      }
      return {
        ...prevLetters,
        [currentRow]: currentRowState
      }
    })
  }


  const handleKeyDown = (e: KeyboardEvent): void => {
    e.preventDefault();
    if(/[a-zA-Z]/.test(e.key) && e.key.length === 1) {
      handleInputLetter(e.key)
    } else if(e.key === 'Backspace') {
      handleRemoveLetter()
    } else if(e.key === 'Enter') {
      if(letters[currentRow].findIndex(l => l === '') !== -1) {
        return
      }
      
      makeGuess()
      
      // TODO handle end game (curentRow === 5)
      

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
        styles = ['bg-[#43a047]', 'bg-[#43a047]', 'bg-[#43a047]', 'bg-[#43a047]', 'bg-[#43a047]']
      } else {
        letters[currentRow].forEach((letter, index) => {
          if(letter === gameWord.charAt(index)) {
            styles.push('bg-[#43a047]');
          } else if(gameWord.includes(letter)) {
            styles.push('bg-[#e4a81d]');
          } else {
            styles.push('bg-[#757575]')
          }
        });
      }
      setCurrentRow(currentRow => currentRow + 1)
    }
    setStyles(prevStyles => {
      return {
        ...prevStyles,
        [currentRow]: styles
      }
    })
    
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
          <Row key={index} letters={letters[index]} styles={styles[index]} rowCompleted={index < currentRow} shouldShake={index === currentRow ? shouldShake : false}/>
        ))
      }
    </main>
  )
}

export default Home