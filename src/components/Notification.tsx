import { useAppSelector } from '../hooks/hooks'


const Notification = () => {
    const showNotification = useAppSelector(state => state.ui.showNotification);
    const notificationText = useAppSelector(state => state.ui.notificationText);


    return (
        <div className={`fixed top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-5 py-3 text-center bg-white rounded-lg shadow-lg border-t-2 flex items-center justify-center ${showNotification ? 'animate-fade-in' : 'animate-fade-out hidden'}`}>
            <div className="font-bold">{notificationText}</div>
        </div>
    )
}

export default Notification