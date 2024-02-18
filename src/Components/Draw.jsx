import React, { useEffect } from 'react'
import Nav from './Nav'



const Draw = (props) => {

    useEffect(() => {

        props.setdraw(props.draw+1)
    }, [])
    
    
    var returnPage = () => {
// ---------------- Player 1 -----------------
        props.setmidHorP1(0)
        props.settopHorP1(0)
        props.setbottomHorP1(0)

        props.setleftVerP1(0)
        props.setmidVerP1(0)
        props.setrightVerP1(0)

        props.setcross1P1(0)
        props.setcross2P1(0)

// ---------------- Player 2 ------------------
        props.setmidHorP2(0)
        props.settopHorP2(0)
        props.setbottomHorP2(0)

        props.setleftVerP2(0)
        props.setmidVerP2(0)
        props.setrightVerP2(0)

        props.setcross1P2(0)
        props.setcross2P2(0)

        props.setlimit(0)
        props.setN1('')
        props.setN2('')
        props.setN3('')
        props.setN4('')
        props.setN5('')
        props.setN6('')
        props.setN7('')
        props.setN8('')
        props.setN9('')
        props.setactive(true)

    }
    var attempt = props.attempt
    var win = props.win
    var lose = props.lose
    var draw = props.draw
  return (
    <>
    <Nav
        attempt={attempt}
        win={win}
        lose={lose}
        draw={draw}
    />
    <div className='h-screen w-screen flex bg-gray-700 flex-col justify-center items-center'>
        <h1 className='text-9xl text-white'>Draw</h1>
        <br />
        <button onClick={returnPage} className='px-10 py-5 text-3xl border text-gray-800 border-gray-800 drop-shadow-lg font-bold rounded bg-white'>Play again</button>
    </div>
    </>

  )
}

export default Draw