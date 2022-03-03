import React from 'react'
import { Link,Route,Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { useDispatch,useSelector } from 'react-redux';
import { logout_success } from '../Redux/Auth/Auth.action';
import { useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
export const Routing = () => {
  const navigate = useNavigate();
  let {pathname} = useLocation();
  const {isLogin,isError,isLoading} = useSelector((state)=>state.auth)
  const dispatch = useDispatch();
  useEffect(()=>{
    if(isLogin){
      if(pathname==="/login"){
        navigate("/");
      }
      else{
        navigate(pathname);
      }

    }
    else{
      navigate("/login")
    }

  },[navigate,isLogin,pathname]);
  return (

   <>
   <nav style={{display : "flex",justifyContent: "space-evenly"}}>
       <Link to="/">Home</Link>
       <Link to="/login">Login</Link>
       <button onClick={()=>{dispatch(logout_success())}}>Logout</button>
   </nav>
   <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/login" element={<Login/>}/>

      
   </Routes>
   </>
  )
}
