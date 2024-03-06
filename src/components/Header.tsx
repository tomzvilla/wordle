import arrowBack from '../assets/img/arrow_back.svg'
import { useAppDispatch } from '../hooks/hooks'
import { uiActions } from '../store/ui-slice'

const Header = () => {

  const dispatch = useAppDispatch()

  const onClickHandler = (): void => {
      dispatch(uiActions.quitGame())
  }

  return (
    <nav className='flex items-center justify-center w-full py-5 border-b font-sans-serif'>
        <div onClick={onClickHandler} className='cursor-pointer fixed left-1 hover:bg-gray-200 hover:rounded-full'>
          <img className='w-[40px]' src={arrowBack} alt="" />
        </div>
        <div className=''>
            <h1 className='text-4xl font-vacer text-center'>
                Wordle Clone
            </h1>
        </div>
    </nav>
  )
}

export default Header