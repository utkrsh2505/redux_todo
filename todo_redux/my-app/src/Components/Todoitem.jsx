import React from 'react'

export const Todoitem = ({item}) => {
     const {title,status} = item;
  return (
      <>
     
     <div style={{display : "flex",justifyContent:"space-around",alignItems:"center"}}>
         <h3>{`Title : ${title}`}</h3>
         <p>{`Status : ${status}`}</p>
     </div>
      </>
   
  )
}
