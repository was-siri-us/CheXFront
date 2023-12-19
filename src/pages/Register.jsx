import React from "react";
import regpng from "../images/login.png";
import "../css/Register.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";



export default function Register() {

    const navigate = useNavigate()



    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
      })

      const registerUser = async (e) => {
        e.preventDefault();
    
        const {name,email,password} = data;
        try{
          const {data} = await axios.post('/register',{
            name,email,password
          })
    
          if(data.error){
            toast.error(data.error);
          }
          else{
            setData({})
            toast.success('Login Successful. Welcome!')
            navigate('/login')
          }
        }
        catch(e){
          console.log(e)
        }
      };
      







  return (
    <div id="img-container3">
      <img src={regpng} alt="background" />
      <div id="img-overlay3"></div>
      <div id="register-container">
        <div id="register-box">
          <h3>Sign-up</h3>
          <form onSubmit={registerUser}>
            <input className="inputField" type="text" placeholder='username' value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}/>
            <input className="inputField" type="email" placeholder='Email' value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}/>
            <input className="inputField" type="password" placeholder='Password' value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}/>
            
            <button type='submit' id="submitbtn">Sign-up</button>

          </form>
          <p className="registerp1">Already have an account? 
            <Link to="/login">
               <span className="registerp2"> Login</span>
            </Link>
           
           </p>
          
        </div>
      </div>
    </div>
  );
}
