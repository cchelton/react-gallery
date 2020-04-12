import React, { useState, useEffect } from "react";
import GalleryList from "../GalleryList/GalleryList";
import axios from "axios";

function Gallery() {
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
  //  RETURN
  //

  return (
    <div>
      <GalleryList
        gallery={gallery}
        putLikes={putLikes}
        getGallery={getGallery}
      />
    </div>
  );
}

export default Gallery;
