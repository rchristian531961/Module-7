import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicCard from './Components/Card'
import BasicTextFields from './Components/CreateForm'
import ContextExample from './Components/context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Hello</h2>
      {/* <BasicCard/> */}
      {/* <BasicTextFields/> */}
      {<ContextExample/>}
    </>
  )
}

export default App
