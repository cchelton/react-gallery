import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";
import AddItemForm from "../AddItemForm/AddItemForm";

function GalleryList(props) {
  const elements = props.gallery.map((item, index) => (
    <GalleryItem
      imgURL={item.path}
      description={item.description}
      id={item.id}
      likes={item.likes}
      key={index}
      putLikes={props.putLikes}
      getGallery={props.getGallery}
    />
  ));

  //
  //  RENDER
  //

  return (
    <div className="GalleryList">
      {elements}
      <AddItemForm getGallery={props.getGallery} />
    </div>
  );
}

export default GalleryList;
