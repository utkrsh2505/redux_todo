import  axios from "axios";

import { delete_todo_failure, delete_todo_request, delete_todo_success, edit_todo_failure, edit_todo_request, edit_todo_success, get_todo_failure, get_todo_request, get_todo_success, todo_failure, todo_request, todo_success } from "./Todo.action";

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

 export const delete_todo = (id)=>(dispatch)=>{
     dispatch(delete_todo_request());
     axios
     .delete(`http://localhost:3000/todos/${id}`)
     .then((res)=>{
         dispatch(delete_todo_success(id))
     })
     .catch((err)=>{
         dispatch(delete_todo_failure())
     })
     
 }

 export const edit_todo = (id,title)=>(dispatch)=>{
     const payload ={
         id : id,
         title : title
     }
     dispatch(edit_todo_request())
     axios
     .patch(`http://localhost:3000/todos/${id}`,{title : payload.title})
     .then((res)=>{
         console.log(res)
         dispatch(edit_todo_success(payload))
     })
     .catch((err)=>{
         dispatch(edit_todo_failure())
     })
 }