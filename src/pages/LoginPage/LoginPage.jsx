import React from 'react'
import "./loginpage.css"

export default function LoginPage() {
    return (
        <div>
              <div className="login">
                  <div className="loginwrapper">
                      <div className="loginLeft">
                          <h3 className="loginLogo">DipsSocials</h3>
                          <span className="loginDec">
                            Connect with world ans make some Buddys.
                          </span>
                      </div>
                      <div className="loginRight">
                          <div className="loginbox">
                                <input type="Email" className="loginInput" placeholder='Email' />
                                <input type="Password" className="loginInput" placeholder='Password' />
                                <button className="loginButtton" >Login In</button>
                                <span className='logonForgot' >Forgot Password?</span>
                                <button className="loginRegister">Create New Account</button>

                          </div>
                      </div>
                  </div>
              </div>
        </div>
    )
}
