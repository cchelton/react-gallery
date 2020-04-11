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
        console.log(response.data);
        this.setState(
          {
            gallery: [...response.data],
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((err) => {
        console.log(`There was an error getting songs: ${err}`);
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
        <GalleryList gallery={this.state.gallery} />
      </div>
    );
  }
}

export default App;
