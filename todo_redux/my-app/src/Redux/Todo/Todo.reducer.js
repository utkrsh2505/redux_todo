import { GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, TODO_FAILURE, TODO_REQUEST, TODO_SUCCESS } from "./Todo.actiontype"

const initState ={
    isLoading : false,
    isError : false,
    Todos : []
}

export const Todo_reducer = (state=initState,{type,payload})=>{
    switch(type){
        case TODO_REQUEST :
            return{
                ...state,
                isLoading : true,
                isError : false
            }
         case TODO_SUCCESS :
            
            return{
                ...state,
                isLoading : false,
                isError : false,
                Todos : [...state.Todos,payload]
               
            }
        case TODO_FAILURE : 
            return{
                ...state,
                isLoading : false,
                isError : true
            }

            //GET TODO
        case GET_TODO_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        case GET_TODO_SUCCESS :
            return {
                ...state,
                isLoading : false,
                isError : false,
                Todos : payload
            }
        case GET_TODO_FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true
            }

        default :
            return state
    }

}