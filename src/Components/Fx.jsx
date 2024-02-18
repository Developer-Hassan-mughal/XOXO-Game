import React, { useState } from 'react'

const Fx = (props) => {
    const [hider, setHider] = useState("")
    

    var playerX = ()=>{
        props.setplayerOne('x')
        props.setplayerTwo('o')
        props.setattempt(props.attempt+1)
        setHider("none")
    }
    var playerO = ()=>{
        props.setplayerOne('o')
        props.setplayerTwo('x')
        props.setattempt(props.attempt+1)
        setHider("none")
    }

  return (
    <div style={{display: hider}} className={"fx {hider} bg-gray-700 absolute h-screen w-screen flex justify-center items-center gap-5  z-10"}>
        <div onClick={playerX} className="playerX px-20 py-5 bg-gray-300 text-gray-800 text-9xl rounded cursor-pointer">X</div>
        <div onClick={playerO} className="playerO px-20 py-5 bg-gray-300 text-gray-800 text-9xl rounded cursor-pointer">O</div>
    </div>
  )
}

export default Fx