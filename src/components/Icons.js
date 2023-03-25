import React from 'react'

const Icons = (props) => {
  return (
    <div className={`${props.class} tools-item`}>
        <img src={props.image}/>
          <span>{props.title}</span>
    </div>
  )
}

export default Icons
