import React, { useState } from "react";
import "./Timeline.css";
import Story from "./Story"; // Import the Story component
import treeImage from "./images/tree.png";


const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState( );
  const handleYearChange = (year) => {
    setSelectedYear(year);
    handleNodeClick(year, 7);

  };
  const events = [
    { year: 2020, event: "1961" },
    { year: 2021, event: "1987" },
    { year: 2022, event: "2001" },
    { year: 2023, event: "2011" },
    { year: 2024, event: "2015" },
    { year: 2025, event: "2023" },
    { year: 2026, event: "21xx" },
    { year: 2027, event: "22xx" },
  ]; // Array of years and corresponding events

  const nodeRefs = events.map(() => React.createRef());
  // Initialize state for clicked year
  const [clickedYear, setClickedYear] = useState(null);
  const [coconutPosition, setCoconutPosition] = useState(null);

  const handleNodeClick = (year, index) => {
    console.log("Clicked Year:", year);
    setClickedYear(year);
    //console.log(index);
    // Check if the ref exists and if the current property is not null
    if (nodeRefs[index] && nodeRefs[index].current) {
      const nodeXPosition = nodeRefs[index].current.offsetLeft - 15;
      console.log("Node X Position:", nodeXPosition);

      // Set the coconut position to the node's x-coordinate
      setCoconutPosition(nodeXPosition);
    } else {
      console.error(`Ref for index ${index} is not available.`);
    }
  };
  function getNodeCenter(node) {
    if (!node) {
      return 0;
    }
    const rect = node.getBoundingClientRect();
    return rect.left + rect.width / 2;
  }
  return (
    <div className="timeline-container">
      {
        <div
          className="coconut"
          style={{ "--coconutPosition": `${coconutPosition}px` }}
        >
          <img src={treeImage} />
        </div>
      }
      <div className="timeline">
        {events.map(({ year, event }, index) => (
          <div key={index}>
            <button
              type="button"
              className={`timeline-node ${
                year === clickedYear ? "active" : ""
              }`}
              ref={nodeRefs[index]}
              onClick={() => handleNodeClick(year, index)}
            >
              <div className="event"></div>
            </button>
            {index !== events.length - 1 && (
              <div
                className={`timeline-line ${
                  year === clickedYear ? "active" : ""
                }`}
                style={{
                  left: `${getNodeCenter(nodeRefs[index].current) + 10}px`,
                }} // Offset by half node width + 10px
              />
            )}
            <div className="event">{event}</div>
          </div>
        ))}
      </div>

     {/* // Render the Story component only if a year is selected */}
      {clickedYear !== null && <Story selectedYear={clickedYear}  onYearChange={handleYearChange} />}
    </div>
  );
};

export default Timeline;
