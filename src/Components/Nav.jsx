import React, { useEffect, useState } from 'react'

const Nav = (props) => {
    
  return (
    <div>
        <nav className='drop-shadow-lg z-10 flex text-white fixed px-20 py-3 w-screen'>
            <ul className='flex drop-shadow-lg text-xl font-bold text-gray-400 rounded justify-between px-56 items-center w-screen py-3 bg-gray-700 '>
                <li>
                    <h1>Attempt : {props.attempt}</h1>
                </li>
                <li>
                    <h1>Win : {props.win}</h1>
                </li>
                <li>
                    <h1>Loss : {props.lose}</h1>
                </li>
                <li>
                    <h1>Draw : {props.draw}</h1>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav