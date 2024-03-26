import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.players.url.type} alt='img' />
        <p className='name'>{props.players.name}</p>
        <div className='space-btwn'>
            <div className='flex-column'>
                <span>Total Events</span>
                <span>{props.players.totalEvent} Events</span>
            </div>
            <div className='flex-column'>
                <span>Sport</span>
                <span>{props.players.sport}</span>
            </div>
        </div>
    </div>
  )
}

export default Card