import React, { Component } from "react";
import css from "./content.custom.css";

export default class Content extends Component {
  render() {
    return (
      <div className="container">
        <div class="row">
          <div className="boxCover">
            <div class="col s4">
              <img
                className="boxImg"
                src="https://m.media-amazon.com/images/M/MV5BMjM3NzI1NDMyNl5BMl5BanBnXkFtZTgwNzUyMDgzNDM@._V1_.jpg"
                alt=""
              />
            </div>
            <div class="col s4">
              <img
                className="boxImg"
                src="https://m.media-amazon.com/images/M/MV5BMTg3ODk5ODE0NV5BMl5BanBnXkFtZTcwNDkzODM1NA@@._V1_.jpg"
                alt=""
              />
            </div>
            <div class="col s4">
              <img
                className="boxImg"
                src="https://m.media-amazon.com/images/M/MV5BZWYxMDZkNmMtZjljNS00MDE5LTlmYmItMmVjZWU5NjQwYmI0L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
