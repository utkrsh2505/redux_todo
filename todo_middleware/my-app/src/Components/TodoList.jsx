import React from 'react'
import { useSelector } from 'react-redux'
import { Todoitem } from './Todoitem';
export const TodoList = () => {
  const {Todos} = useSelector((state)=>state.todo);
  return (
    <div>
      {Todos.map((item)=>{
        return(
          <Todoitem  key={item.id} item={item}/>
        )
      })}
    </div>
  )
}
