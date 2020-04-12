import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";

function GalleryList(props) {
  const elements = props.gallery.map((item, index) => (
    <GalleryItem
      imgURL={item.path}
      description={item.description}
      id={item.id}
      likes={item.likes}
      key={index}
      putLikes={props.putLikes}
    />
  ));

  //
  //  RENDER
  //

  return <div className="GalleryList">{elements}</div>;
}

export default GalleryList;
