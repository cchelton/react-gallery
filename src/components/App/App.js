import React, { Component } from "react";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
import axios from "axios";

class App extends Component {
  state = {
    gallery: [],
  };

  //
  //  EVENT HANDLERS
  //

  componentDidMount() {
    this.getGallery();
  }
  //
  //  SERVER API CALLS
  //

  getGallery() {
    axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        this.setState({
          gallery: [...response.data],
        });
      })
      .catch((err) => {
        console.log(`GET ERR: ${err}`);
      });
  }

  putLikes(id) {
    axios({
      method: "PUT",
      url: `gallery/like/${id}`,
    })
      .then((response) => {})
      .catch((err) => {
        console.log(`PUT ERR: ${err}`);
      });
  }

  //
  //  RENDER
  //

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList gallery={this.state.gallery} putLikes={this.putLikes} />
      </div>
    );
  }
}

export default App;
