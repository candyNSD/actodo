import React from 'react'

export const Card = (props) => {
  return (
    <div style={{backgroundColor:props.bgcolor}} className='px-10 py-5 border rounded-mdy flex-grow'>
        <h1 className='font-medium text-2xl'>{props.title}</h1>
        <p>{props.subtitle}</p>
    </div>
  )
}
