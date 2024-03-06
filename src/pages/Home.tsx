import wordleIcon from '../assets/img/wordle.png'
import { useAppDispatch } from '../hooks/hooks'
import { gameActions } from '../store/game-slice'
const Home = () => {

    const dispatch = useAppDispatch()

    const onClickHandler = (): void => {
        dispatch(gameActions.initializeGame())
    }
    return (
        <div className='bg-[#e3e3e1] h-screen flex items-center justify-center'>
            <div className='w-[450px] flex flex-col items-center justify-center'>
                <img src={wordleIcon} alt="Logo" className='w-[100px] mb-4'/>
                <h1 className='text-6xl font-vacer mb-4'>Wordle Clone</h1>
                <h2 className='text-4xl text-center font-glegoo mb-6'>Get 6 chances to guess a 5-letter word.</h2>
                <button onClick={onClickHandler} className='bg-black hover:bg-gray-950 text-white px-20 py-3 rounded-3xl m-t-10'>Play</button>
            </div>
        </div>
  )
}

export default Home