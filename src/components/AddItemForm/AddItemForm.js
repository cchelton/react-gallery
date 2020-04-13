import React, { useState } from "react";
import "./AddItemForm.css";
import axios from "axios";

function AddItemForm(props) {
  const [formData, setFormData] = useState({
    path: "",
    description: "",
    likes: 0,
  });
  const getGallery = props.getGallery;

  //
  //  SERVER API CALLS
  //

  function postGallery() {
    axios({
      method: "POST",
      url: "/gallery",
      data: formData,
    })
      .then((response) => {
        setFormData({
          path: "",
          description: "",
          likes: 0,
        });
        getGallery();
      })
      .catch((err) => {
        console.log(`POST ERR: ${err}`);
      });
  }

  //
  //  EVENT HANDLERS
  //

  function changeFormData(event, property) {
    setFormData({
      ...formData,
      [property]: event.target.value,
    });
  }

  function submitFormData(event) {
    event.preventDefault();
    postGallery();
  }

  //
  //  RETURN
  //

  return (
    <div className="AddItemForm">
      <h3>Add an Image</h3>
      <form onSubmit={(event) => submitFormData(event)}>
        <input
          name="path"
          type="url"
          placeholder="image url (https://someurl.com)"
          value={formData.path}
          onChange={(event) => changeFormData(event, "path")}
          required
        />
        <input
          name="description"
          type="text"
          placeholder="image description"
          value={formData.description}
          onChange={(event) => changeFormData(event, "description")}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddItemForm;
