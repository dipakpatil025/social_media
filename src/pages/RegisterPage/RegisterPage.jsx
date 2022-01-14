import React from 'react'
import "./registerPage.css"

export default function RegisterPage() {
    return (
        <div>
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
                                <input type="text" className="loginInput" placeholder='Username' />
                                <input type="Email" className="loginInput" placeholder='Email' />
                                <input type="Password" className="loginInput" placeholder='Password' />
                                <input type="Password" className="loginInput" placeholder='Password Again' />
                                <button className="loginButtton" >Sign Up</button>
                                <span className='logonForgot' >Forgot Password?</span>
                                <button className="loginRegister">Login into Account</button>

                          </div>
                      </div>
                  </div>
              </div>
        </div>
            
        </div>
    )
}
