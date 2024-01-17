import { Route , BrowserRouter ,Routes, Navigate } from 'react-router-dom'
import Chat from '../src/components/chat/Index'
import { useState } from 'react'
import Login from "../src/components/login/Login"

function App() {
  const [user, setUser ] = useState(null);
  const [secret,setSecret] = useState(null);
  const isAuth = Boolean(user) && Boolean(secret);
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={
              isAuth ? (
                <Navigate to="/chat" />
              ) : (
                <Login setUser={setUser} setSecret={setSecret} />
              )
            }
          /> 
          <Route path = "/" element = {isAuth ? (<Chat user = {user} secret={secret}/>) : (<Navigate to="/" />)} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
