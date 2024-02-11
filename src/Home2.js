import React from "react";
import backgroundImage from "./images/ArtistPage.jpg"; // Import your background image
import Story from "./Story";
const Home2 = () => {
  return (
    <div
      className="home2-container"
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

export default Home2;
