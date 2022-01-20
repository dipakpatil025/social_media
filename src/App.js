
import React, { useContext } from 'react'

import Home from './pages/HomePage/Home'
import LoginPage from './pages/LoginPage/LoginPage'
import Profile from './pages/Profile/Profile'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from './Context/AuthContext'

export default function App() {
  const { user } = useContext(AuthContext)
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <RegisterPage />}
          </Route>

          <Route path="/register">
            {user ?
              <Redirect to="/" /> : <LoginPage />
            }

          </Route>

          <Route path="/login">
            {user ?
              <Redirect to="/" /> : <LoginPage />
            }
          </Route>

          <Route path="/profile/:username">
            <Profile />
          </Route>


          <Route path="/register">
            <RegisterPage />
          </Route>

        </Switch>
      </Router>

    </>
  )
}
