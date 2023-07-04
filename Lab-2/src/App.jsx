import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Emoji from './Components/Emojis'

function App() {
  const [count, setCount] = useState(0)
  const [clicked, setClicked]=useState(false);

  return (
    <>
      
      <h1>Vite + React</h1>
      {clicked ? <Emoji newEmoji="🤣" ariaLabel='smiling with hearts'/>:
      <Emoji newEmoji="😀" ariaLabel='smiling halo'/>}
    </>
  )
}

export default App
