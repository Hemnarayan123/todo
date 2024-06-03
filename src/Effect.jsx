import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);


  return (
    <div className="main-div">


      <h1 className="head">Password generator</h1>
      <div className="input-box">
        <input type="text" value={password} className="input" placeholder="Password"readOnly/>
      </div>



      <div className="Password_option">

        {/* <div className="setLength_Password">
          <input type="range" min={6} max={100} value={length} className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value)}}/>
          <label>Length: {length}</label>
        </div> */}


        <div className="number_Allowed">
          <input type="checkbox" defaultChecked={numberAllowed} id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev)}}/>
          <label htmlFor="numberInput">Numbers</label>
        </div>


        <div className="character_Allowed">
          <input type="checkbox"defaultChecked={charAllowed}id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)}}/>
          <label htmlFor="characterInput">Characters</label>
        </div>


      </div>
    </div>
  );
}
export default App;


// function App() {
//     const [count, setCount] = useState(0);
  
//     useEffect(() => {
//       setTimeout(() => {
//         setCount((count) => count + 1);
//       }, 1000);
//     });
  
//     return <h1>I've rendered {count} times!</h1>;
//   }

  // function App() {
  //   const [count, setCount] = useState(0);
    
  // const update = () => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);

  // }
      
  //   return(
  //     <>
  //     <h1 onClick={update}> I've rendered {count} times!</h1>
  //     </>
     
  //   ) 
  // }

// export default App;
