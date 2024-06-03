import React,{useEffect, useState} from "react";

function Password() {

 // password
 // length
 // character allow
 // number allow 

 const [password, setPassword] = useState('');
 const [length, setLength] = useState(4);
 const [characterAllow, setCharacterAllow] = useState(false)
 const [numberAllow, setNumberAllow] = useState(false)

 const passwordGenerator = () => {
  let pass = '';
  let str = 'abcdefghijklmnopqrstuvwxyzADPOJSPODJSPFHSFPHSKF'

  if(numberAllow){
    str += 1234567890;
  }

  if(characterAllow){
    str += '!@#$%^&*()'
  }
  
   for(let i=1; i<=length; i++){
    let randome = Math.floor(Math.random() * str.length)
     pass += str[randome]
   }
   setPassword(pass)
 }

 useEffect(() => {
  passwordGenerator();
 }, [numberAllow, characterAllow])  // dependencies

  return (

    

    <div className="main-div">

{/* .....................input box and button..................... */}

      <div>
      <div className="input-box">
        <input type="text" 
        className="input" 
        placeholder="Password"
        value={password} 
        readOnly />
      </div>
      <button onClick={passwordGenerator} style={{color:'red', }}>Generate Password</button>
      </div>


{/* .................................................................. */}



      <div className="Password_option">

        <div className="number_Allowed">
          <input
            type="checkbox"
            id="numberInput"
            onChange={() => {
              setNumberAllow(prev => !prev)
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
{/* .................................................................... */}
        <div className="character_Allowed">
          <input
            type="checkbox"
            id="characterInput"
            onChange={() => {
              setCharacterAllow((prev) => !prev)
            }
            }
          />
          <label htmlFor="characterInput">Characters</label>
        </div>


      </div>
    </div>
  );
}

export default Password;
