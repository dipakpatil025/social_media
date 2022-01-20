import { CircularProgress } from '@mui/material';
import React,{useRef,useContext} from 'react'
import { login_call } from '../../apiCalls/apicall';
import { AuthContext } from '../../Context/AuthContext';
import "./loginpage.css"

export default function LoginPage() {
        const email = useRef();
        const password  = useRef();  
    const {user,isFetching,error,dispatch} = useContext(AuthContext)
    const handleClick = (e) =>{
        e.preventDefault();
        // console.log(email.current.value);
        login_call({email : email.current.value, password : password.current.value},dispatch)
    }
    console.log(user);
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
                          <form className="loginbox" onSubmit={handleClick}>
                                <input type="Email" className="loginInput" placeholder='Email' ref={email} />
                                <input type="password" className="loginInput" minLength={6} placeholder='password' ref={password} />
                                <button className="loginButtton" >{isFetching ?<CircularProgress color='secondary'size="20px"/> : "Login In"}</button>
                                <span className='logonForgot' >Forgot password?</span>
                                <button className="loginRegister">{isFetching ?<CircularProgress color='secondary'size="20px"/> : "Create New Account"}</button>

                          </form>
                      </div>
                  </div>
              </div>
        </div>
    )
}
