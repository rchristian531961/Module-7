import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PageDisplay from './Components/PageDisplay'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Blog Post</h1>
      <PageDisplay/>
    </>
  )
}

export default App
