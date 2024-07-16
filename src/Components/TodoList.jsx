import React from 'react'
import { useState } from 'react'
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {

    

    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

  return (
    
        <div className='bg-[#BDB4EA] border rounded-md p-2 flex-grow'>
            <h1 className='text-2xl font-medium'>Today's Activity</h1>
            {activityArr.length == 0 ? <p>you haven't added anything yet</p> : ""}

            {
                activityArr.map((item,index) =>{
                    return <TodoItem activity ={item.activity} id= {item.id} index ={index} activityArr={activityArr} setActivityArr={setActivityArr}/>
                })
            }
        
    </div>
  )
}
