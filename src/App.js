
import React from 'react'

import Home from './pages/HomePage/Home'
import LoginPage from './pages/LoginPage/LoginPage'
import Profile from './pages/Profile/Profile'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/profile/:Dipak">
            <Profile />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/register">
            <RegisterPage />
          </Route>

        </Switch>
      </Router>

    </>
  )
}
