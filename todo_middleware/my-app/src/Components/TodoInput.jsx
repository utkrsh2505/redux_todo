import React from 'react'
import { useState } from 'react'
import "./todo.css";
export const TodoInput = ({handleAdd}) => {
  const [data,setData] = useState("");

    
  return (
    <>
      <h1>Todo</h1>
      <div className='main'>
      <input  className='main_input' type="text" placeholder="type something" value={data} onChange={(e)=>setData(e.target.value)}/>
      <button className='main_btn' onClick={()=>{
        if(data){
          handleAdd(data)
          setData("")
        }
       
      }
        }>Add</button>
      </div>
    </>
 

  )
}
