import React from 'react'

function Button(props) {
  return (
    <div className='btn-container'>
      <button className='button'>{props.name}</button>
    </div>
  )
}

export default Button