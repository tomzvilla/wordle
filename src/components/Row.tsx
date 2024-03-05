import React from 'react'
import { useState } from 'react'

interface RowProps {
    letters: string[]
    styles: string[]
    rowCompleted: boolean
    shouldShake: boolean
}

const Row: React.FC<RowProps> = ({ letters, styles, rowCompleted, shouldShake }) => {

    const [defaultStyles, setDefaultStyles] = useState(['','','','',''])


    const handleAnimationEnd = (index: number): void => {
        const updatedStyles = [...defaultStyles];
        updatedStyles[index] = styles[index] + ' text-white border-current'
        setDefaultStyles(updatedStyles)
    }

    return (
        <div className={`flex flex-row my-1 ${shouldShake ? 'animate-horizontal-shake' : ''}`}>
            {
                letters.map( (letter, index) => (
                    <div 
                        style={{ animationDelay: `${index * 400}ms` }} 
                        className={`w-[70px] h-[70px] mx-0.5 p-0 rounded-md flex items-center justify-center border-2 ${defaultStyles[index]} ${rowCompleted ? `animate-flip` : ''}`} 
                        key={index}
                        onAnimationEnd={() => handleAnimationEnd(index)}
                    >
                        <div className='text-4xl font-bold'>
                        {letter}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Row