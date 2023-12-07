import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm.jsx'
import Authenticate from './components/Authenticate.jsx'

function App() {
  const [token, setToken] = useState(null)

    return(
      <>
      <SignUpForm token={token} setToken={setToken}/>
      <Authenticate token={token} setToken={setToken}/>
      </>
    )
}

export default App
