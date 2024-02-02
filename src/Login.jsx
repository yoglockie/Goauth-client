import React from 'react'
import './App.css';
import { Link } from "react-router-dom";
const Login = () => {
  const googleAuth=()=>{
    window.open("http://localhost:8080/auth/google/callback","_self")
  }
  return (
    <div className='login'>
           <input type="text" placeholder='Email'/>
           <input type="password" name="" id="" placeholder='password'/>
           <button >Login</button>
           <div className='glogin'>
                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png" alt="gicon" />
                <button onClick={googleAuth} className='sbtn'>SignIn with Google</button>
           </div>
           <button><p>Sign UP</p></button>
           
    </div>
  )
}
export default Login
   