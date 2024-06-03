import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import './App.css'
import { GrFormUp, GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Slider from "./Slider";
import Todo from "./Todo";
import Password from "./Password";
import Api from "./Api";


// function App() {
  // const [length, setLength] = useState(6);
  // const [numberAllow, setNumberAllow] = useState(false);
  // const [characterAllow, setCharacterAllow] = useState(false);
  // const [password, setPassword] = useState("");

//  const reGenerateButton =  useCallback(() => {
//     let pass = "";

//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopkrstuvwxyz";

//     if (numberAllow) {
//       str += "1234568790";
//     }

//     if (characterAllow) {
//       str += "@!#$%^&*";
//     }

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length);
//       pass += str[char];
//     }
//     setPassword(pass);
//   });

//   useEffect(() => {
//     reGenerateButton()
//   },[numberAllow, characterAllow])

//   return (
//     <>
//       <div className="main-div text-4xl">
//         <h1>Password Generator</h1>

//         <div className="input-box">
//           <input type="text" value={password} readOnly />
//         </div>

//         <div className="password-option">
//           <div className="number-allow">
//             <input
//               type="checkbox"
//               className="h-8 w-8"
//               name=""
//               id="numberAllow"
//               defaultChecked={numberAllow}
//               onChange={() => {
//                 setNumberAllow((prev) => !prev);
//               }}
//             />

//             <label htmlFor="number">Number</label>
//           </div>

//           <div className="special-char-allow">
//             <input
//               type="checkbox"
//               className="h-8 w-8"
//               name=""
//               id="characterAllow"
//               defaultChecked={characterAllow}
//               onChange={() => {
//                 setCharacterAllow((prev) => !prev);
//               }}
//             />
//             <label htmlFor="character">Character</label>
//           </div>
//         </div>

//         <button onClick={reGenerateButton}>Password re-Generate</button>
//       </div>
//     </>
//   );
// }

// function App() {

//   // ........................................................................simple number next and prev

//     // const [number, setNumber] = useState(1);

//     // const handleNext = () => {
//     //   if (number < 5) {
//     //     setNumber(number + 1);
//     //   }
//     // };

//     // const handlePrev = () => {
//     //   if (number > 1) {
//     //     setNumber(number - 1);
//     //   }
//     // };

//     // return (
//     //   <div className="number-slider">
//     //     <div className="number-display">{number}</div>
//     //     <button onClick={handlePrev} className="prev-btn">
//     //       Previous
//     //     </button>
//     //     <button onClick={handleNext} className="next-btn">
//     //       Next
//     //     </button>
//     //   </div>
//     // );


//     // ........................................................................image using next and prev
//     // const images = [
//     //   { id: 1, src: 'https://cdn.pixabay.com/photo/2015/12/06/09/15/maple-1079235_1280.jpg' },
//     //   { id: 2, src: 'https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_1280.jpg' },
//     //   { id: 3, src: 'https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_1280.jpg' },
//     //   { id: 4, src: 'https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275_1280.jpg' },
//     //   { id: 5, src: 'https://cdn.pixabay.com/photo/2024/03/24/14/51/banner-8653259_1280.jpg' }
//     // ];
  
//     // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
//     // const handleNext = () => {
//     //   if (currentImageIndex < images.length - 1) {
//     //     setCurrentImageIndex(currentImageIndex + 1);
//     //   }
//     // };
//     // const handlePrev = () => {
//     //   if (currentImageIndex > 0) {
//     //     setCurrentImageIndex(currentImageIndex - 1);
//     //   }
//     // };
//     // return (
//     //   <div className="number-slider">
//     //     <div className="image-display">
//     //       <img src={images[currentImageIndex].src} />
//     //     </div>
//     //     <button onClick={handlePrev} className="prev-btn">Previous</button>
//     //     <button onClick={handleNext} className="next-btn">Next</button>
//     //   </div>
//     // );


//     // .................................................................................................add icon for next and prev

//       // const images = [
//       //   { id: 1, src: 'https://cdn.pixabay.com/photo/2015/12/06/09/15/maple-1079235_1280.jpg' },
//       //   { id: 2, src: 'https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_1280.jpg' },
//       //   { id: 3, src: 'https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_1280.jpg' },
//       //   { id: 4, src: 'https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275_1280.jpg' },
//       //   { id: 5, src: 'https://cdn.pixabay.com/photo/2024/03/24/14/51/banner-8653259_1280.jpg' }
//       // ];
    
//       // const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
//       // const handleNext = () => {
//       //   if (currentImageIndex < images.length - 1) {
//       //     setCurrentImageIndex(currentImageIndex + 1);
//       //   }
//       // };
    
//       // const handlePrev = () => {
//       //   if (currentImageIndex > 0) {
//       //     setCurrentImageIndex(currentImageIndex - 1);
//       //   }
//       // };
    
//       // return (
//       //   <div className="number-slider">
//       //     <div className="image-display">
//       //       <img src={images[currentImageIndex].src} alt={`Image ${currentImageIndex + 1}`} />
//       //     </div>
//       //     <button onClick={handlePrev} className="prev-btn"><GrPrevious /></button>
//       //     <button onClick={handleNext} className="next-btn"><GrNext /></button>
//       //   </div>
//       // );



//       // ................................................................................................infinite next and prev

//             const images = [
//         { id: 1, src: 'https://cdn.pixabay.com/photo/2015/12/06/09/15/maple-1079235_1280.jpg' },
//         { id: 2, src: 'https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_1280.jpg' },
//         { id: 3, src: 'https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_1280.jpg' },
//         { id: 4, src: 'https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275_1280.jpg' },
//         { id: 5, src: 'https://cdn.pixabay.com/photo/2024/03/24/14/51/banner-8653259_1280.jpg' }
//       ];
    
//       const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
//       const handleNext = () => {
//         if (currentImageIndex === images.length - 1) {
//           setCurrentImageIndex(0); // If it's the last image, go back to the first one
//         } else {
//           setCurrentImageIndex(currentImageIndex + 1); // Otherwise, go to the next image
//         }
//       };
    
//       const handlePrev = () => {
//         if (currentImageIndex === 0) {
//           setCurrentImageIndex(images.length - 1); // If it's the first image, go to the last one
//         } else {
//           setCurrentImageIndex(currentImageIndex - 1); // Otherwise, go to the previous image
//         }
//       };

//       // useEffect(() => {
//       //   setTimeout(() => {
//       //     handleNext();
//       //   }, 3000);
//       // }, [currentImageIndex]); // Run this effect whenever currentImageIndex changes
    
//       return (
//         <div className="main-box">
//           <div className="image-display">
//             <img src={images[currentImageIndex].src} />
//           </div>
//           <button onClick={handlePrev} className="prev-btn"><GrPrevious /></button>
//           <button onClick={handleNext} className="next-btn"><GrNext /></button>
//         </div>
//       );


//   };
















function App(){

  return(

    <>

    {/* <Todo/> */}
    <Slider/>
    <Password/>
    {/* <Api/> */}
    
    </>
  )
}
export default App;