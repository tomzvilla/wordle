import arrowBack from '../assets/img/arrow_back.svg'
import { useAppDispatch } from '../hooks/hooks'
import { gameActions } from '../store/game-slice'
import ThemeToggle from './ThemeToggle'
const Header = () => {

  const dispatch = useAppDispatch()

  const onClickHandler = (): void => {
      dispatch(gameActions.quitGame())
  }

  return (
    <nav className='flex items-center justify-center w-full py-5 border-b font-sans-serif'>
        <div onClick={onClickHandler} className='cursor-pointer fixed left-1 hover:bg-gray-200 hover:rounded-full dark:hover:bg-[#2c2b2b]'>
          <img className='w-[40px] dark:invert' src={arrowBack} alt="" />
        </div>
        <div>
            <h1 className='text-4xl font-vacer text-center dark:text-white'>
                Wordle Clone
            </h1>
        </div>
        <ThemeToggle />
    </nav>
  )
}

export default Header