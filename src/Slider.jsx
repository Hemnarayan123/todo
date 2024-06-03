import React, { useEffect } from "react";
import { useState } from "react";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import "./App.css";
function Slider() {
  const [number, setNumber] = useState(1);

  const images = [
    {
      id: 1,
      src: "https://cdn.pixabay.com/photo/2015/12/06/09/15/maple-1079235_1280.jpg",
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_1280.jpg",
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_1280.jpg",
    },
    {
      id: 4,
      src: "https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275_1280.jpg",
    },
    {
      id: 5,
      src: "https://cdn.pixabay.com/photo/2024/03/24/14/51/banner-8653259_1280.jpg",
    },
  ];

  const handleNext = () => {
    if (number === images.length - 1) {
      setNumber(0);
    } else {
      setNumber(number + 1);
    }
  };

  const handlePrev = () => {
    if (number === 0) {
      setNumber(images.length - 1);
    } else {
      setNumber(number - 1);
    }
  };
        
useEffect(() =>{
  let interval = setInterval(() => {
    handleNext();
  }, 2000);

  return () => clearInterval(interval);
})



  return (
    <div className="main-box">
      <div className="image-display">
        {" "}
        <img src={images[number].src} />
      </div>
      <button onClick={handlePrev} className="next-btn">
        <FcNext />
      </button>
      <br />
      <button onClick={handleNext} className="prev-btn">
        <FcPrevious />
      </button>
      <br />
    </div>
  );
}

export default Slider;
