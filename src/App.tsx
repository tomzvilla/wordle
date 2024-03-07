import './App.css'
import Header from './components/Header'
import GameScreen from './components/GameScreen'
import Home from './pages/Home'
import Keyboard from './components/Keyboard'
import Notification from './components/Notification'
import Alert from './components/Alert'
import { useAppSelector } from './hooks/hooks'



const App = () => {

  const initGame = useAppSelector(state => state.game.initGame)

  return (
    <div className='min-h-screen bg-white dark:bg-[#121213] '>
      {!initGame ? 
      <Home />
      :
      <>
        <Header />
        <Alert />
        <Notification />
        <GameScreen />
        <Keyboard />
      </>
      }
    </div>
  )
}

export default App
