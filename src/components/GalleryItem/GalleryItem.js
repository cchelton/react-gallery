import React, { useState } from "react";

//  TODO: make cards fixed size
//  TODO: animate cards

function GalleryComponent(props) {
  const [displayMode, setDisplayMode] = useState("img");
  const testImgURL = "images/goat_small.jpg";

  const toggleDisplayMode = () => {
    // switch display mode between image and description
    if (displayMode === "img") {
      setDisplayMode("desc");
    } else {
      setDisplayMode("img");
    }
  };

  if (displayMode === "img") {
    return (
      <div onClick={toggleDisplayMode}>
        <img src={testImgURL} />
      </div>
    );
  } else {
    return (
      <div onClick={toggleDisplayMode}>
        <p>DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION </p>
      </div>
    );
  }
}

export default GalleryComponent;
