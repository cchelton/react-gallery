import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";

function GalleryList(props) {
  const gallery = props.gallery;
  const elements = gallery.map((item, index) => (
    <GalleryItem
      imgURL={item.path}
      description={item.description}
      id={item.id}
      key={index}
    />
  ));
  return <div className="GalleryList">{elements}</div>;
}

export default GalleryList;
