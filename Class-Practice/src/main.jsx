import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const intialValue={
  count:1, colorMode:"light",userName:"Bill"
}

const MyContext=React.createContext('initial value');/*Created Context */
MyContext.displayName="this context";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContext.Provider>{/*Used for Context */}
    <App />
    </MyContext.Provider>
  </React.StrictMode>,
)
