import React, { useEffect } from "react";

import Home2 from "./Home2";
import Home1 from "./Home1";
import Image1 from "./images/Yes.png";
import NO from "./images/No.png";

const Story = ({ selectedYear, onYearChange }) => {
  // Define the images corresponding to each event
  const images = {
    "2020": { image: require("./images/1961.png"), audio: require("./audio/Clip 1.wav"), vol: 0.1 },
    "2021": { image: require("./images/1987.png"), audio: require("./audio/Clip 2.wav"), vol: 0.5 },
    "2022": { image: require("./images/2001.png"), audio: require("./audio/Clip 3.wav"), vol: 1},
    "2023": { image: require("./images/2011.png"), audio: require("./audio/Clip 4.wav"), vol: 0.5 },
    "2024": { image: require("./images/2015.png"), audio: require("./audio/Clip 5.wav"), vol: 0.3 },
    "2025": { image: require("./images/2023.png"), audio: require("./audio/Clip 6.wav"), vol: 0.2},
    "2026": { image: require("./images/21xx.png"), audio: null },
    "2027": { image: require("./images/22xx.png"), audio: null },
  };

  // Get the image source based on the selected year
  const { image: imageUrl, audio: audioFile, vol: volume } = images[selectedYear] || {};
  
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    height: 'fit-content', // Set a fixed height for the container
    overflowY: 'scroll'
     // Align items to the center of the container
  };
  // Style for adjusting size and positioning
  const imageStyle = {
    maxWidth: "50%",
    height: "auto",
    position: "relative", // Change to relative to position buttons relative to image
    top: "calc(100% + 20px)", // Position below the timeline container
   // Center horizontally
  };
  useEffect(() => {
    if (audioFile) {
      const audioElement = new Audio(audioFile);
      audioElement.volume =  volume;
      audioElement.play();
  
      return () => {
        audioElement.pause();
      };
    }
  }, [audioFile]);

  // Style for the container with background image
 
  return (
    <>
    <div className="story" style={containerStyle}>
     
     { selectedYear === 2026 ? (
    <>
    <img src={imageUrl} alt="Story" style={imageStyle} />
    <div style={{display: "flex", justifyContent:"space-between", gap:"10%"}}>
    <button type="button" style={{ height: "100px", width: "200px", position: "relative" }}      onClick={() => onYearChange(2027)}>
  <div style={{ height: "100%", width: "100%", position: "absolute", top:"0", left:"0" }}>
    <img src={Image1} style={{ width: "100%", height: "100%", }} alt="" />
  </div>
</button>


<button type="button" style={{ height: "100px", width: "200px", position: "relative" }}  onClick={() => {
    const home3Element = document.getElementById('home3');
    if (home3Element) {
      home3Element.scrollIntoView({ behavior: 'smooth' });
    }
  }}>
  <div style={{ height: "100%", width: "100%", position: "absolute", top:"0", left:"0" }}>
    <img src={NO} style={{ width: "100%", height: "100%", }} alt="" />
  </div>
</button>
    </div>
  </> 
      )
      : (
        <img src={imageUrl} alt="Story" style={imageStyle} />
      )
     }
    </div>


</>
  );
};

export default Story;
