import React, { useState } from "react";
import "./GalleryItem.css";

//  TODO: animate cards

function GalleryItem(props) {
  const [displayMode, setDisplayMode] = useState("img");
  const [likes, setLikes] = useState(0);
  const imgURL = props.imgURL;
  const description = props.description;
  const id = props.id;

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
      <div className="GalleryItem" key={id}>
        <img
          onClick={toggleDisplayMode}
          src={imgURL}
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
      <div onClick={toggleDisplayMode} className="GalleryItem" key={id}>
        <p>{description}</p>
      </div>
    );
  }
}

export default GalleryItem;
