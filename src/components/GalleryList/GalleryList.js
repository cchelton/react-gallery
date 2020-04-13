import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./GalleryList.css";
import GalleryItem from "../GalleryItem/GalleryItem";
import AddItemForm from "../AddItemForm/AddItemForm";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

function GalleryList(props) {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGallery();
  }, []);

  //
  //  SERVER API CALLS
  //

  function getGallery() {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        setGallery(response.data);
      })
      .catch((err) => {
        console.log(`GET ERR: ${err}`);
      });
  }

  function putLikes(id) {
    axios({
      method: "PUT",
      url: `gallery/like/${id}`,
    })
      .then((response) => {
        getGallery();
      })
      .catch((err) => {
        console.log(`PUT ERR: ${err}`);
      });
  }

  //
  //  RENDER
  //

  return (
    <div className="GalleryList">
      {gallery.map((item, index) => (
        <motion.div layoutTransition={spring} key={index}>
          <GalleryItem
            imgURL={item.path}
            description={item.description}
            id={item.id}
            likes={item.likes}
            key={index}
            putLikes={putLikes}
            getGallery={getGallery}
          />
        </motion.div>
      ))}
      <motion.div layoutTransition={spring}>
        <AddItemForm getGallery={getGallery} />
      </motion.div>
    </div>
  );
}

export default GalleryList;
