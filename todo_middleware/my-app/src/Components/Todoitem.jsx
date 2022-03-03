import React from 'react'
import "./todo.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { delete_todo, edit_todo } from '../Redux/Todo/todo.api';
export const Todoitem = ({item}) => {
    const dispatch = useDispatch();
     const {title,status,id} = item;

     const [isEdit,setIsEdit] = useState(false);
     const[edit_data,setEdit_data] = useState("")
     const handleEdit=()=>{
         if(edit_data){
            dispatch(edit_todo(id,edit_data))
            setEdit_data("")
            setIsEdit(false)

         }
       
     }
     
  return (
      <>
     
     <div style={{display : "flex",justifyContent:"center",alignItems:"center"}} key={id}>
       
        {(isEdit )?
          (<div><input className='main_input' type="text" value={edit_data} onChange={(e)=>setEdit_data(e.target.value)}/><button className='btn' onClick={()=>setIsEdit(false)}>Cancel</button><button onClick={()=>{handleEdit()}} className='btn'>Save</button></div>):
        (<div className='edit'><h3>{`Title : ${title}`}</h3> <button className='btn' onClick={()=>setIsEdit(true)}>Edit</button></div>)} 
         <p>{`Status : ${status}`}</p>
         <button className='btn' onClick={()=>dispatch(delete_todo(id))}>Delete</button>
     </div>
      </>
   
  )
}
