import React from 'react'
import { useState } from 'react'
export const TodoInput = ({handleAdd}) => {
  const [data,setData] = useState("");

    
  return (
    <>
      <h1>home</h1>
      <input type="text" placeholder="type something" value={data} onChange={(e)=>setData(e.target.value)}/>
      <button onClick={()=>handleAdd(data)}>Add</button>
    </>
 

  )
}
