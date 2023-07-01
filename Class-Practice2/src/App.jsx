import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicCard from './Components/Card'
import BasicTextFields from './Components/CreateForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BasicCard/>
      <BasicTextFields/>
    </>
  )
}

export default App
