import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Posts from './Components/Posts'
import Dashboard from './Components/Dashboard'
import { Link } from "react-router-dom";


/*
After importing use Routes like example below

import {Route,Routes} from 'react-router-dom'

 <Routes>  
      <Route path='/Emoji' element={<EmojiDisplay/>}/>
  </Routes>
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>  
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Posts' element={<Posts/>}/>
      </Routes>

      <Link to='/Posts'>Posts Link</Link>
      <br/>
      <Link to='/Dashboard'>Dashboard Link</Link>
      <br/>
      <Link to ='/'>Home Page</Link>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
