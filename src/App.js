import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
function App() {
  const [user,setUser] = useState(null)
  const getUser= async()=>{
          try {
              const url = "http://localhost:8080/auth/login/success";
              const {data} = await axios.get(url, {withCredentials:true});
              console.log(data);
              setUser(data.user._json)
          } catch (error) {
            console.log(error);
          }

  }

  useEffect(()=>{
    getUser()
  },[]);

  return (
    <div className="App">
         
         <Routes>
             
             <Route 
             exact
             path="/" 
             element={user?<Home user={user}/>:<Navigate to="/login"/>}
             />

             <Route 
             exact
             path="/login" 
             element={user?<Navigate to="/"/>:<Login/>}
             />

            <Route 
             path="/signup" 
             element={user?<Navigate to="/"/>:<Signup/>}
             />

             
            
         </Routes>

    </div>
  );
}

export default App;
