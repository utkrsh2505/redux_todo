import React from 'react'
import { TodoInput } from '../Components/TodoInput';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { get_todo_api, todoApi } from '../Redux/Todo/todo.api';

import { TodoList } from '../Components/TodoList';

export const Home = () => {
 
  const {isLoading,isError,Todos} = useSelector((state)=>state.todo);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(get_todo_api())
  },[dispatch])

  const handleAdd = (title)=>{
    const payload = {
      title,
      status : false
    } 
dispatch(todoApi(payload))

  }
  
  return (
    <div >
        <TodoInput handleAdd={handleAdd}/>

        {isLoading && <h1>Loading....</h1>}
        {isError && <h1>Something Wrong</h1>}
        <TodoList/>
    </div>
  )
}
