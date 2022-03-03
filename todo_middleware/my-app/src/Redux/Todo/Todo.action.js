import {DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, EDIT_TODO_FAILURE, EDIT_TODO_REQUEST, EDIT_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, TODO_FAILURE, TODO_REQUEST, TODO_SUCCESS} from "./Todo.actiontype";

export const todo_request = ()=>{
    return {
        type : TODO_REQUEST
    }
}
export const todo_success = (payload)=>{
    return{
        type : TODO_SUCCESS,
        payload
    }
}

export  const todo_failure =()=>{
    return{
        type : TODO_FAILURE
    }
}

// GET TODO

export const get_todo_request = ()=>{
    return{
        type : GET_TODO_REQUEST
    }
}
export const get_todo_success = (payload)=>{
    return {
        type : GET_TODO_SUCCESS,
        payload
    }
}

export const get_todo_failure = ()=>{
    return{
        type : GET_TODO_FAILURE
    }
}

//DELETE TODO

export const delete_todo_request = ()=>{
    return{
        type : DELETE_TODO_REQUEST
    }
}
export const delete_todo_success = (payload)=>{
    return {
        type : DELETE_TODO_SUCCESS,
       payload
    }
}

export const delete_todo_failure = ()=>{
    return{
        type : DELETE_TODO_FAILURE
    }
}

//EDIT_TODO
export const edit_todo_request = ()=>{
    return{
        type : EDIT_TODO_REQUEST
    }
}
export const edit_todo_success = (payload)=>{
    return{
        type : EDIT_TODO_SUCCESS,
        payload
    }
}
export const edit_todo_failure = ()=>{
    return{
        type : EDIT_TODO_FAILURE
    }
}
