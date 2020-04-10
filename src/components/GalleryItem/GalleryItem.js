import React, { useState } from "react";
import "./GalleryItem.css";

//  TODO: make cards fixed size
//  TODO: animate cards

function GalleryItem(props) {
  const [displayMode, setDisplayMode] = useState("img");
  const [likes, setLikes] = useState(0);
  const testImgURL = "images/goat_small.jpg";

  const toggleDisplayMode = () => {
    // switch display mode between image and description
    if (displayMode === "img") {
      setDisplayMode("desc");
    } else {
      setDisplayMode("img");
    }
  };

  const likePicture = (event) => {
    setLikes(likes + 1);
  };

  if (displayMode === "img") {
    return (
      <div className="GalleryItem">
        <img
          onClick={toggleDisplayMode}
          src={testImgURL}
          alt="boo hoo you forgot an img"
        />
        <div className="LikeBar">
          <button onClick={likePicture}>Like</button>
          <p>{likes} Likes</p>
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={toggleDisplayMode}
        className="GalleryItem"
        onClick={toggleDisplayMode}
      >
        <p>DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION</p>
      </div>
    );
  }
}

export default GalleryItem;
