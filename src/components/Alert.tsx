import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { gameActions } from '../store/game-slice';
import { uiActions } from '../store/ui-slice';

const Alert = () => {

    const dispatch = useAppDispatch();
    const showAlert = useAppSelector(state => state.ui.showAlert);
    const alertText = useAppSelector(state => state.ui.alertText);

    const onClickHandler = () => {
        dispatch(uiActions.closeAlert())
        dispatch(gameActions.resetGame())
        dispatch(uiActions.endAnimation())
    };

    return (
        <div className={`fixed top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-[150px] py-[70px] text-center bg-white rounded-lg shadow-lg border-t-2 flex flex-col items-center justify-center ${showAlert ? 'animate-fade-in' : 'animate-fade-out hidden'}`}>
            <div className="font-bold text-xl">{alertText.text}</div>
            {
                alertText.gameWord ?
                <p className='mt-4 text-center'>The word was: <strong>{alertText.gameWord}</strong></p>
                :
                null
            }
            <button onClick={onClickHandler} className='bg-black hover:bg-gray-950 text-white px-7 py-2 rounded-3xl mt-5'>Play again</button>
        </div>
    )
}

export default Alert