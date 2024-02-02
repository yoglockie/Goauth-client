import React from 'react'
import './App.css';

function Home(userDetails){
  const user = userDetails.user;

  const logout=()=>{
    window.open("http://localhost:8080/auth/logout","_self")
  }
  return (
   
           <div>
           <label htmlFor="">Name : </label>
           <h1>{user.name}</h1>
           <label htmlFor="">Email : </label>
           <h1>{user.email}</h1>
           <button onClick={logout}>Logout</button>
           </div>
          
           
          
    
  )
}

export default Home