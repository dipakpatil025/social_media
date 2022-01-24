import { Alert } from '@mui/material';
import axios from 'axios';
import React,{useState,useRef} from 'react'
import { Link, useHistory } from 'react-router-dom';
import "./registerPage.css"

export default function RegisterPage() {
    const email = useRef();
    const username = useRef();
    const password  = useRef(); 
    const cpassword  = useRef(); 
    const [alert, setAlert] = useState({status:false,message:""
    })
    
    const history = useHistory();
    const handleClick = async(e) =>{
        e.preventDefault();
        if (password.current.value !== cpassword.current.value) {
            setAlert({statues:true,message:"Password Mismatch !"})
        }else{
            const user = {
                username    : username.current.value,
                email       : email.current.value,
                password    : password.current.value,
            }
            try {
                const res = await axios.post("http://dipsocials.herokuapp.com/api/auth/register",user)
                history.push("/login");
            } catch (error) {
                console.log(error);   
            }

        }
        // console.log("dd");
    }
    
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
                              <form action="" onSubmit={handleClick}>
                          <div className="loginbox">

                                <input type="text" className="loginInput" minLength={3} required placeholder='Username' ref={username}/>
                                <input type="Email" className="loginInput" required placeholder='Email' ref={email}/>
                                <input type="Password" className="loginInput" minLength={6} required placeholder='Password' ref={password} />
                                <input type="Password" className="loginInput" minLength={6} required placeholder='Password Again' ref={cpassword}/>
                                {alert.status ?<Alert severity="success" color="info">{alert.message}</Alert> : ""}
                                        
                                <button className="loginButtton" type='submit' >Sign Up</button>
                                <span className='logonForgot' >Forgot Password?</span>
                                <Link to="/login">

                                <button className="loginRegister">Login into Account</button>
                                </Link>
                              

                          </div>
                              </form>
                      </div>
                  </div>
              </div>
        </div>
            
        </div>
    )
}
