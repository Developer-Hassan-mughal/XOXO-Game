import { useEffect, useState } from "react";
import Fx from "./Components/Fx";
import Win from "./Components/Win";
import Draw from "./Components/Draw";
import Loss from "./Components/Loss";
import Nav from "./Components/Nav";


function App() {
  const [playerOne, setplayerOne] = useState("")
  const [playerTwo, setplayerTwo] = useState("")

  const [active, setactive] = useState(true)
  const [limit, setlimit] = useState(0)

  // ----------------- XO Block States ---------------------------
  
  const [N1, setN1] = useState('')
  const [N2, setN2] = useState('')
  const [N3, setN3] = useState('')
  const [N4, setN4] = useState('')
  const [N5, setN5] = useState('')
  const [N6, setN6] = useState('')
  const [N7, setN7] = useState('')
  const [N8, setN8] = useState('')
  const [N9, setN9] = useState('')

  // ----------------- Result States ----------------------------

  const [attempt, setattempt] = useState(0)
  const [win, setwin] = useState(0)
  const [lose, setlose] = useState(0)
  const [draw, setdraw] = useState(0)


  //----------------- Player 1 States ----------------------------

  const [topHorP1, settopHorP1] = useState(0)
  const [midHorP1, setmidHorP1] = useState(0)
  const [bottomHorP1, setbottomHorP1] = useState(0)

  const [leftVerP1, setleftVerP1] = useState(0)
  const [midVerP1, setmidVerP1] = useState(0)
  const [rightVerP1, setrightVerP1] = useState(0)

  const [cross1P1, setcross1P1] = useState(0)
  const [cross2P1, setcross2P1] = useState(0)

  //----------------- player 2 States --------------------------

  const [topHorP2, settopHorP2] = useState(0)
  const [midHorP2, setmidHorP2] = useState(0)
  const [bottomHorP2, setbottomHorP2] = useState(0)

  const [leftVerP2, setleftVerP2] = useState(0)
  const [midVerP2, setmidVerP2] = useState(0)
  const [rightVerP2, setrightVerP2] = useState(0)

  const [cross1P2, setcross1P2] = useState(0)
  const [cross2P2, setcross2P2] = useState(0)




  // --------------------- Player 1 --------------------

  var play1
  var play2
  var play3
  var play4
  var play5
  var play6
  var play7
  var play8
  var play9

(()=>{

  // var play1
  if(active == true && N1 == 0){ 
   play1 = ()=>{
      setN1(playerOne);
      setTimeout(() => {
        setactive(false);
        setlimit(limit+1)
        setleftVerP1(leftVerP1+1)
        settopHorP1(topHorP1+1)
        setcross1P1(cross1P1+1)
      }, 300);
    }
  }
  // var play2
  if(active == true && N2 == 0){
   play2 = ()=>{
      setN2(playerOne);
      setTimeout(() => {
        setactive(false);
          setlimit(limit+1)
          setmidVerP1(midVerP1+1)
          settopHorP1(topHorP1+1)
        }, 300);
    }
  }
  // var play3
  if(active == true && N3 == 0){
   play3 = ()=>{
      setN3(playerOne);
      setTimeout(() => {
        setactive(false);
          setlimit(limit+1)
          setrightVerP1(rightVerP1+1)
          settopHorP1(topHorP1+1)
          setcross2P1(cross2P1+1)
        }, 300);
    }
  }
  // var play4
  if(active == true && N4 == 0){
   play4 = ()=>{
      setN4(playerOne);
      setTimeout(() => {
        setactive(false);
          setlimit(limit+1)
          setleftVerP1(leftVerP1+1)
        setmidHorP1(midHorP1+1)
      }, 300);

    }
  }
  // var play5
  if(active == true && N5 == 0){
   play5 = ()=>{
      setN5(playerOne);
      setTimeout(() => {
        setactive(false);
          setlimit(limit+1)
          setmidVerP1(midVerP1+1)
          setmidHorP1(midHorP1+1)
          setcross1P1(cross1P1+1)
          setcross2P1(cross2P1+1)

        }, 300);

    }
  }
  // var play6
  if(active == true && N6 == 0){
   play6 = ()=>{
      setN6(playerOne);
      setTimeout(() => {
        setactive(false);
        setlimit(limit+1)
        setrightVerP1(rightVerP1+1)
          setmidHorP1(midHorP1+1)
        }, 300);

    }
  }
  // var play7
  if(active == true && N7 == 0){
   play7 = ()=>{
      setN7(playerOne);
      setTimeout(() => {
        setactive(false);
          setlimit(limit+1)
          setleftVerP1(leftVerP1+1)
          setbottomHorP1(bottomHorP1+1)
          setcross2P1(cross2P1+1)
        }, 300);
    }
  }
  // var play8
  if(active == true && N8 == 0){
   play8 = ()=>{
      setN8(playerOne);
      setTimeout(() => {
        setactive(false);
          setlimit(limit+1)
          setmidVerP1(midVerP1+1)
          setbottomHorP1(bottomHorP1+1)
        }, 300);
    }
  }
  // var play9
  if(active == true && N9 == 0){
   play9 = ()=>{
      setN9(playerOne);
      setTimeout(() => {
        setactive(false);
          setlimit(limit+1)
          setrightVerP1(rightVerP1+1)
          setbottomHorP1(bottomHorP1+1)
          setcross1P1(cross1P1+1)
        }, 300);
    }
  }
})()


  // ------------------------ Draw --------------------------
  
  if(limit === 9 && topHorP1 < 3 && midHorP1 < 3 && bottomHorP1 < 3 && leftVerP1 < 3 && midVerP1 < 3 && rightVerP1 < 3 && cross1P1 < 3 && cross2P1 < 3){
    return(
    <Draw
// ---------------------- Player 1 --------------------
    settopHorP1={settopHorP1}
    setmidHorP1={setmidHorP1}
    setbottomHorP1={setbottomHorP1}

    setleftVerP1={setleftVerP1}
    setmidVerP1={setmidVerP1}
    setrightVerP1={setrightVerP1}

    setcross1P1={setcross1P1}
    setcross2P1={setcross2P1}

// ---------------------- Player 2 -------------------
    settopHorP2={settopHorP2}
    setmidHorP2={setmidHorP2}
    setbottomHorP2={setbottomHorP2}

    setleftVerP2={setleftVerP2}
    setmidVerP2={setmidVerP2}
    setrightVerP2={setrightVerP2}

    setcross1P2={setcross1P2}
    setcross2P2={setcross2P2}

    setN1={setN1}
    setN2={setN2}
    setN3={setN3}
    setN4={setN4}
    setN5={setN5}
    setN6={setN6}
    setN7={setN7}
    setN8={setN8}
    setN9={setN9}
    setlimit={setlimit}
    setactive={setactive}

    attempt={attempt}
    win={win}
    lose={lose}

    setdraw={setdraw}
    draw={draw}
    />
    )

  }

  // ---------------------- Player 2 -------------------------

  var player2 = ()=>{
  if(active == false && limit <= 8){
    var math = Math.random()
    math = Math.floor(math*10)
    if(math == 0){
      math += 1
    }
    setactive(true)

    if(math == 1){
      if(N1.length == 0 ){
        setN1(playerTwo)
        setlimit(limit+1)
        setTimeout(() => {
          
          setleftVerP2(leftVerP2+1)
          settopHorP2(topHorP2+1)
          setcross1P2(cross1P2+1)
        }, 300);
      }else{
        var math = Math.random()
        math = Math.floor(math*10)
        if(math == 0){
          math += 1
        }
        // setdecider(math)
        setactive(false)
      }
    }else if(math == 2){
      if(N2.length == 0 ){
        setN2(playerTwo)
        setlimit(limit+1)
        setTimeout(() => {
          
          setmidVerP2(midVerP2+1)
          settopHorP2(topHorP2+1)
        }, 300);
      }else{
        var math = Math.random()
        math = Math.floor(math*10)
        if(math == 0){
          math += 1
        }
        // setdecider(math)
        setactive(false)

      }
    }else if(math == 3){
      if(N3.length == 0 ){
        setN3(playerTwo)
        setlimit(limit+1)
        setTimeout(() => {
          
          setrightVerP2(rightVerP2+1)
          settopHorP2(topHorP2+1)
          setcross2P2(cross2P2+1)
        }, 300);
      }else{
        var math = Math.random()
        math = Math.floor(math*10)
        if(math == 0){
          math += 1
        }
        // setdecider(math)
        setactive(false)

      }
    }else if(math == 4){
      if(N4.length == 0 ){
        setN4(playerTwo)
        setlimit(limit+1)
        setTimeout(() => {
          
          setleftVerP2(leftVerP2+1)
          setmidHorP2(midHorP2+1)
        }, 300);
      }else{
        var math = Math.random()
        math = Math.floor(math*10)
        if(math == 0){
          math += 1
        }
        // setdecider(math)
        setactive(false)

      }
    }else if(math == 5){
      if(N5.length == 0 ){
        setN5(playerTwo)
        setlimit(limit+1)
        setTimeout(() => {
          
          setmidVerP2(midVerP2+1)
          setmidHorP2(midHorP2+1)
          setcross1P2(cross1P2+1)
          setcross2P2(cross2P2+1)
        }, 300);
      }else{
        var math = Math.random()
        math = Math.floor(math*10)
        if(math == 0){
          math += 1
        }
        // setdecider(math)
        setactive(false)

      }
    }else if(math == 6){
      if(N6.length == 0 ){
        setN6(playerTwo)
        setlimit(limit+1)
        setTimeout(() => {
          
          setrightVerP2(rightVerP2+1)
          setmidHorP2(midHorP2+1)
        }, 300);
      }else{
        var math = Math.random()
        math = Math.floor(math*10)
        if(math == 0){
          math += 1
        }
        // setdecider(math)
        setactive(false)

      }
    }else if(math == 7){
      if(N7.length == 0 ){
        setN7(playerTwo)
        setlimit(limit+1)
        setTimeout(() => {
          
          setleftVerP2(leftVerP2+1)
          setbottomHorP2(bottomHorP2+1)
          setcross2P2(cross2P2+1)
        }, 300);
      }else{
        var math = Math.random()
        math = Math.floor(math*10)
        if(math == 0){
          math += 1
        }
        // setdecider(math)
        setactive(false)

      }
    }else if(math == 8){
      if(N8.length == 0 ){
        setN8(playerTwo)
        setlimit(limit+1)
        setTimeout(() => {
          
          setmidVerP2(midVerP2+1)
          setbottomHorP2(bottomHorP2+1)
        }, 300);
      }else{
        var math = Math.random()
        math = Math.floor(math*10)
        if(math == 0){
          math += 1
        }
        // setdecider(math)
        setactive(false)

      }
    }else if(math == 9){
      if(N9.length == 0 ){
        setN9(playerTwo)
        setlimit(limit+1)
        setTimeout(() => {
          
          setrightVerP2(rightVerP2+1)
          setbottomHorP2(bottomHorP2+1)
          setcross1P2(cross1P2+1)
        }, 300);
      }else{
        var math = Math.random()
        math = Math.floor(math*10)
        if(math == 0){
          math += 1
        }
        // setdecider(math)
        setactive(false)
      }

    }

  }
  
  }


    // ---------------------- Win ---------------------------

  if(topHorP1 < 3 && midHorP1 < 3 && bottomHorP1 < 3 && leftVerP1 < 3 && midVerP1 < 3 && rightVerP1 < 3 && cross1P1 < 3 && cross2P1 < 3) {
    setTimeout(() => {
      
      player2()
    }, 300);
  }else{ 
    return(
      <Win
// ---------------------- Player 1 --------------------
      settopHorP1={settopHorP1}
      setmidHorP1={setmidHorP1}
      setbottomHorP1={setbottomHorP1}

      setleftVerP1={setleftVerP1}
      setmidVerP1={setmidVerP1}
      setrightVerP1={setrightVerP1}

      setcross1P1={setcross1P1}
      setcross2P1={setcross2P1}

// ---------------------- Player 2 -------------------
      settopHorP2={settopHorP2}
      setmidHorP2={setmidHorP2}
      setbottomHorP2={setbottomHorP2}

      setleftVerP2={setleftVerP2}
      setmidVerP2={setmidVerP2}
      setrightVerP2={setrightVerP2}

      setcross1P2={setcross1P2}
      setcross2P2={setcross2P2}

      setN1={setN1}
      setN2={setN2}
      setN3={setN3}
      setN4={setN4}
      setN5={setN5}
      setN6={setN6}
      setN7={setN7}
      setN8={setN8}
      setN9={setN9}
      setlimit={setlimit}
      setactive={setactive}

      attempt={attempt}
      setwin={setwin}
      win={win}
      lose={lose}
      draw={draw}
      />
    )
  }


    // ---------------------- Loss ---------------------------

  if(topHorP2 < 3 && midHorP2 < 3 && bottomHorP2 < 3 && leftVerP2 < 3 && midVerP2 < 3 && rightVerP2 < 3 && cross1P2 < 3 && cross2P2 < 3) {
  }else{    
    return(
      <Loss
// ---------------------- Player 1 --------------------
      settopHorP1={settopHorP1}
      setmidHorP1={setmidHorP1}
      setbottomHorP1={setbottomHorP1}

      setleftVerP1={setleftVerP1}
      setmidVerP1={setmidVerP1}
      setrightVerP1={setrightVerP1}

      setcross1P1={setcross1P1}
      setcross2P1={setcross2P1}

// ---------------------- Player 2 -------------------
      settopHorP2={settopHorP2}
      setmidHorP2={setmidHorP2}
      setbottomHorP2={setbottomHorP2}

      setleftVerP2={setleftVerP2}
      setmidVerP2={setmidVerP2}
      setrightVerP2={setrightVerP2}

      setcross1P2={setcross1P2}
      setcross2P2={setcross2P2}


      setN1={setN1}
      setN2={setN2}
      setN3={setN3}
      setN4={setN4}
      setN5={setN5}
      setN6={setN6}
      setN7={setN7}
      setN8={setN8}
      setN9={setN9}
      setlimit={setlimit}
      setactive={setactive}

      attempt={attempt}
      win={win}
      setlose={setlose}
      lose={lose}
      draw={draw}
      />
    )
  }

// ------------------------ Main Page ------------------------ 
  return (

    <div className="main h-[100vh] w-[100vw] overflow-hidden">
      <Fx
      playerOne={playerOne}
      setplayerOne={setplayerOne}
      playerTwo={playerTwo}
      setplayerTwo={setplayerTwo}
      attempt={attempt}
      setattempt={setattempt}

      />
      <Nav
      attempt={attempt}
      win={win}
      lose={lose}
      draw={draw}
      />
      
        <div className="grid grid-cols-3 grid-rows-3 gap-4 bg-gray-500 h-[100vh] w-[100vw] px-20 pt-20 pb-4">
          <div onClick={play1} className="card bg-gray-700 flex justify-center items-center text-[200px] text-white uppercase drop-shadow-lg rounded">{N1}</div>
          <div onClick={play2} className="card bg-gray-700 flex justify-center items-center text-[200px] text-white uppercase drop-shadow-lg rounded">{N2}</div>
          <div onClick={play3} className="card bg-gray-700 flex justify-center items-center text-[200px] text-white uppercase drop-shadow-lg rounded">{N3}</div>
          <div onClick={play4} className="card bg-gray-700 flex justify-center items-center text-[200px] text-white uppercase drop-shadow-lg rounded">{N4}</div>
          <div onClick={play5} className="card bg-gray-700 flex justify-center items-center text-[200px] text-white uppercase drop-shadow-lg rounded">{N5}</div>
          <div onClick={play6} className="card bg-gray-700 flex justify-center items-center text-[200px] text-white uppercase drop-shadow-lg rounded">{N6}</div>
          <div onClick={play7} className="card bg-gray-700 flex justify-center items-center text-[200px] text-white uppercase drop-shadow-lg rounded">{N7}</div>
          <div onClick={play8} className="card bg-gray-700 flex justify-center items-center text-[200px] text-white uppercase drop-shadow-lg rounded">{N8}</div>
          <div onClick={play9} className="card bg-gray-700 flex justify-center items-center text-[200px] text-white uppercase drop-shadow-lg rounded">{N9}</div>

        </div>
            
    </div>

  );
}

export default App;
