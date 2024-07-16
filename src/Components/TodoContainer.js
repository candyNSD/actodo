import {TodoAdd} from "./TodoAdd"
import {TodoList} from "./TodoList"
import { useState } from "react"

export const TodoContainer = () => {

    const[activityArr,setActivityArr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Take a shower"
        },
        {
            id:3,
            activity:"Go for a walk"
        }
    ])
  return (
    <div>
         <div className='flex flex-wrap gap-5'>
         <TodoAdd activityArr={activityArr} setActivityArr={setActivityArr}/>
         <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
        </div>
    </div>
  )
}
