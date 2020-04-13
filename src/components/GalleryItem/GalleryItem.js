import React, { useState, useEffect } from "react";
import "./GalleryItem.css";
import axios from "axios";
import { motion } from "framer-motion";

//  TODO: animate cards
const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

function GalleryItem(props) {
  const [displayMode, setDisplayMode] = useState("img");
  const [likes, setLikes] = useState(0);
  const imgURL = props.imgURL;
  const description = props.description;
  const id = props.id;
  const putLikes = props.putLikes;
  const getGallery = props.getGallery;

  useEffect(() => {
    setLikes(props.likes);
  }, [props.likes]);

  //
  //  SERVER API CALLS
  //

  function deleteItem(id) {
    axios({
      method: "DELETE",
      url: `gallery/delete/${id}`,
    }).then((response) => {
      getGallery();
    });
  }

  //
  //  EVENT HANDLERS
  //

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

  const deletePicture = (event) => {
    const id = event.target.dataset.id;
    deleteItem(id);
  };

  //
  //  RETURN
  //

  if (displayMode === "img") {
    return (
      <motion.div className="GalleryItem" layoutTransition={spring}>
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
      </motion.div>
    );
  } else {
    return (
      <div onClick={toggleDisplayMode} className="GalleryItem" key={id}>
        <p>{description}</p>
        <div className="DeleteBar">
          <button onClick={deletePicture} data-id={id}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default GalleryItem;
