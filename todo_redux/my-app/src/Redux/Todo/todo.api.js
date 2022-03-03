import  axios from "axios";

import { get_todo_failure, get_todo_request, get_todo_success, todo_failure, todo_request, todo_success } from "./Todo.action";

export const todoApi= (params)=>(dispatch)=>{
    dispatch(todo_request());
axios
.post("http://localhost:3000/todos",params)
.then((res)=>{
    dispatch(get_todo_api());
//dispatch(todo_success(params));

})
.catch((err)=>{
    dispatch(todo_failure())
})
}


//GET TODO
 export const  get_todo_api = ()=>(dispatch)=>{
     dispatch(get_todo_request());
     axios
     .get("http://localhost:3000/todos")
     .then((res)=>{
         console.log(res.data)
         dispatch(get_todo_success(res.data))
        
     })
     .catch((err)=>{
         dispatch(get_todo_failure())
     })
     

 }