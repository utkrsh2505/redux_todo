import { loadData, saveData } from "../../utils/Localstorage"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../Auth/Auth.actiontype"

const initState = {
   isLogin : loadData("token") ? true : false,
   token : loadData("token") || "",
    isLoading : false,
    isError : false
}

export const Auth_reducer = (state=initState,{type,payload})=>{
    //console.log(payload)
    switch(type){
        case LOGIN_REQUEST :
            return{
                ...state,
                isLoading : true,
                isError : false
            }
        case LOGIN_SUCCESS :
            console.log("succ",payload)
            saveData("token",payload )
            return{
                ...state,
                isLogin : true,
                isLoading : false,
                isError : false,
                token : payload
            }
        case LOGIN_FAILURE :
            return{
                ...state,
                isLoading : false,
                isError : true
            }
            case LOGOUT_SUCCESS :
                saveData("token","" )
                return{
                    ...state,
                    isLoading : false,
                    isError : false,
                    token : "",
                    isLogin : false
                }

        default :
            return state;
    }

}