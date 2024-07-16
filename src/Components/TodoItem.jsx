import React from 'react'

export const TodoItem = (props) => {

    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr

   const handleDelete = (deleteid) => {
    const temparr =activityArr.filter((item) => {
        if(item.id === deleteid) {
            return false
        } else {
            return true
        }
    })
    setActivityArr(temparr)
   } 

  return (
    <div className='flex justify-between'>
        <p>{props.index+1}.{props.activity}</p>
        <button className='text-red-500' onClick={()=>handleDelete(props.id)}>Delete</button>
    </div>
  )
}
