import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Posts from './Components/Posts'
import Dashboard from './Components/Dashboard'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
      <br/>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link><br/>
            <Nav.Link href="/Posts">Posts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default App
