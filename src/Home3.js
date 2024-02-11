import React from "react";
import backgroundImage from "./images/AbouttheArt.jpg"; // Import your background image
import Story from "./Story";
const Home3 = () => {
  return (
    <div id="home3"
      className="home3-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        scrollSnapAlign: 'start', 
        scrollSnapStop:"always"
        // Ensure the background covers the entire viewport height
      }}
    >
    
    </div>
  );
};

export default Home3;