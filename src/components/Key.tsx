import React from 'react'
import backspace from '../assets/img/backspace.svg'
interface KeyProps {
    letter: string,
    big?: boolean
}

const Key:React.FC<KeyProps> = ({ letter, big }) => {
  return (
      !big ?
      <button 
        className='w-[44px] h-[56px] m-1 text-lg bg-[#d3d6da] rounded-md cursor-pointer font-bold border-0 text-center flex items-center justify-center dark:text-white dark:bg-[#818384]'
      >
        { letter }
      </button>
      :
      <button 
        className='w-[65px] h-[56px] m-1 text-lg bg-[#d3d6da] rounded-md cursor-pointer font-bold border-0 text-center flex items-center justify-center dark:text-white dark:bg-[#818384]'
      >
      { letter === 'Enter' ? letter : <img className='dark:invert' src={backspace}></img> }
      </button>

  )
}

export default Key