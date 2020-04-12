import React, { useState, useEffect } from "react";
import "./GalleryItem.css";

//  TODO: animate cards

function GalleryItem(props) {
  const [displayMode, setDisplayMode] = useState("img");
  const [likes, setLikes] = useState(0);
  const imgURL = props.imgURL;
  const description = props.description;
  const id = props.id;
  const putLikes = props.putLikes;

  useEffect(() => {
    setLikes(props.likes);
  }, [props.likes]);

  const toggleDisplayMode = () => {
    // switch display mode between image and description
    if (displayMode === "img") {
      setDisplayMode("desc");
    } else {
      setDisplayMode("img");
    }
  };

  const likePicture = (event) => {
    const id = event.target.dataset.id;
    putLikes(id);
  };

  if (displayMode === "img") {
    return (
      <div className="GalleryItem">
        <img
          onClick={toggleDisplayMode}
          src={imgURL}
          alt="boo hoo you forgot an img"
        />
        <div className="LikeBar">
          <button onClick={likePicture} data-id={id}>
            Like
          </button>
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
