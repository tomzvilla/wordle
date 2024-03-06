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
    <>
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
    </>
  )
}

export default App
