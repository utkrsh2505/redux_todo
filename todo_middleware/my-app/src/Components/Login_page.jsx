import React from 'react'
import "../Pages/login.css"
import { useState } from 'react'
export const Login_page = ({handle_login}) => {
    const [email,setEmail] = useState("eve.holt@reqres.in");
    const [password,setPassword] = useState("cityslicka");
    const handleLogin = (e)=>{
      e.preventDefault();
      handle_login({email,password})

    }
    
  return (
    <form onSubmit={handleLogin}>
    <input type="email" placeholder='Type Eamil'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
    <br/>
    <input type="password" placeholder='Type Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    <br/>
    <input className='btn_login' type="submit" value="Login"/>
</form>
  )
}
