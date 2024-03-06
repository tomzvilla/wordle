import React from 'react'
import { useState, useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { uiActions } from '../store/ui-slice'
interface RowProps {
    letters: string[]
    styles: string[]
    rowCompleted: boolean
    shouldShake: boolean
}

const Row: React.FC<RowProps> = ({ letters, styles, rowCompleted, shouldShake }) => {

    const [defaultStyles, setDefaultStyles] = useState<string[]>([]);

    useEffect(() => {
        // Inicializa defaultStyles con los estilos predeterminados
        const initialDefaultStyles = letters.map(() => '');
        setDefaultStyles(initialDefaultStyles);
    }, [letters]);


    const dispatch = useAppDispatch()

    const handleAnimationEnd = (index: number): void => {
        const updatedStyles = [...defaultStyles];
        updatedStyles[index] = styles[index] + ' text-white border-current'
        setDefaultStyles(updatedStyles)
        if(index === 4) {
            dispatch(uiActions.endAnimation())
        }
    }

    return (
        <div className={`flex flex-row my-1 ${shouldShake ? 'animate-horizontal-shake' : ''}`}>
            {
                letters.map( (letter, index) => (
                    <div 
                        style={{ animationDelay: `${index * 400}ms` }} 
                        className={`w-[70px] h-[70px] mx-0.5 p-0 rounded-md flex items-center justify-center border-2 border-gray-300 ${defaultStyles[index]} ${rowCompleted ? `animate-flip` : ''}`} 
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