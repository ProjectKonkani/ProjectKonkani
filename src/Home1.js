import React from "react";
import backgroundImage from "./images/Asset.jpg"; // Import your background image

const Home1 = () => {
  return (
    <>
    <div
      className="home1-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "110vh",
        scrollSnapAlign: 'start', 
        scrollSnapStop:"always"
        //overflowY: "scroll" // Ensure the background covers the entire viewport height
      }}
    >
      {/* Content of your Home1 component 
      <h1>Welcome to Home1</h1>
      <p>This is your Home1 component with a background image.</p> */}
    </div>
    
    </>
  );
};

export default Home1;
