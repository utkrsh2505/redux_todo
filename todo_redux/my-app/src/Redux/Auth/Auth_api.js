import axios from "axios";
import { login_failure, login_request, login_success } from "./Auth.action";
 export const Auth_login = (params)=>(dispatch)=>{
     dispatch(login_request());
     axios
    .post("https://reqres.in/api/login",params)
    .then((res)=>{
        console.log(res.data.token)
        dispatch(login_success(res.data.token));
    })
    .catch((error)=>{
        dispatch(login_failure());
        console.log(error)
    })
}