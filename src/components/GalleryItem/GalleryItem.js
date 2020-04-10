import React, { useState } from "react";

function GalleryComponent(props) {
  const [displayMode, setDisplayMode] = useState("img");

  const toggleDisplayMode = () => {
    // switch display mode between image and description
    if (displayMode === "img") {
      setDisplayMode("desc");
    } else {
      setDisplayMode("img");
    }
  };

  return (
    <div>
      <p>The display mode is {displayMode}</p>
      <button onClick={toggleDisplayMode}>Click</button>
    </div>
  );
}

export default GalleryComponent;
