import React, { useEffect } from 'react'
import Nav from './Nav'



const Win = (props) => {

    useEffect(() => {
        props.setwin(props.win+1)
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
      <div className='h-screen w-screen flex bg-blue-800 flex-col justify-center items-center'>
        <h1 className='text-9xl text-white'>You Won</h1>
        <br />
        <button onClick={returnPage} className='px-10 py-5 text-3xl border border rounded bg-gray-700 drop-shadow-lg font-bold text-white drop-shadow-2xl'>Play again</button>

    </div>
    </>

  )
}

export default Win