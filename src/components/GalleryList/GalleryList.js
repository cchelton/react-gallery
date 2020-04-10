import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";

function GalleryList(props) {
  const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const elements = testArr.map((item, index) => (
    <GalleryItem imgURL={"NEEDS_URL"} description={"NEEDS_DESC"} key={index} />
  ));
  return <div className="GalleryList">{elements}</div>;
}

export default GalleryList;
