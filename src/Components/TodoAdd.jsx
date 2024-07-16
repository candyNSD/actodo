import React from 'react'
import { useState } from 'react'

export const TodoAdd = (props) => {

    const activityArr = props.activityArr;
    const setActivityArr = props.setActivityArr;

    const [newActivity, setNewActivity] = useState()

    const handleChange = (e) => {
        setNewActivity(e.target.value)
    }

    const addActivity = () => {
        setActivityArr([...activityArr,{id:activityArr.length+1, activity:newActivity}])
        setNewActivity("")
    }
  return (
    <div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-bold'>Manage Activities</h1>
            <div>
                <input value={newActivity} onChange={handleChange} type="text" className='border border-black bg-transparent p-1' placeholder='Next Activity?'/>
                <button onClick={addActivity} className='bg-black text-white p-1 border border-blac'>Add</button>
            </div>
            
        </div>
    </div>
  )
}
