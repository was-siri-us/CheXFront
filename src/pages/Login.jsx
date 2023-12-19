import React, { useState } from 'react'
import '../css/Login.css'
import loginbg from '../images/login.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-hot-toast'

export default function Login() {
  const navigate = useNavigate()


  const [data,setData] = useState({
    email:'',
    password:'',
  })


  const loginUser = async (e)=>{
    e.preventDefault();
    console.log("Executing")
    const {email,password} = data
    try{
      const {data} = await axios.post('/login',{
        email,
        password
      });
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({});
        navigate('/dashboard')

      }
    } catch(error){
      console.log(error)
    }

  }




  return (




    <div id="img-container2">
      <img src={loginbg} alt="background" />
      <div id="img-overlay2"></div>
      <div id="login-container">
        <div id="login-box">
          <h3>Have an account?</h3>



          <form onSubmit={loginUser}>
            <input className="inputField" type="email" placeholder='Email' value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}/>
            <input className="inputField" type="password" placeholder='Password' value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}/>
            <button type='submit' id='submitbtn'>Login</button>
          </form>


          
          <p className="registerp1">Dont have an account?
            <Link to="/register">
               <span className="registerp2">Register</span>
            </Link>
           
           </p>

        </div>
      </div>

      
      </div>
  )
}
