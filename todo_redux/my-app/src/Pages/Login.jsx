import React from 'react'
import { Login_page } from '../Components/Login_page';
import { useSelector,useDispatch } from 'react-redux';
import { Auth_login } from '../Redux/Auth/Auth_api';
export const Login = () => {
  const dispatch = useDispatch();
 // const {isLogin,token,isLoading,isError} = useSelector((state)=>state.auth)
  const handle_login = ({email,password})=>{
    dispatch(Auth_login({email,password}))
    
  }
  return (
    <div><Login_page handle_login={handle_login}/></div>
  )
}
