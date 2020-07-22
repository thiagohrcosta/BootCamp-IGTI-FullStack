import React, { Component } from "react";
import css from "./carousel.custom.css";
export default class Carousel extends Component {
  render() {
    return (
      <div>
        <div className="backgroundImg">
          <div className="">
  
          </div>
        </div>

        <div className="contentBox">
              <h1 className="titleMain">First Blood</h1>
              <h2 className="supportTitle">
                Seven years after his discharge, Vietnam War veteran John Rambo
                travels by foot to visit an old comrade, only to learn that his
                friend had died from cancer the previous year, due to Agent
                Orange exposure during the war.
              </h2>
              <button className="buttonCarousel"><i class="fas fa-play"></i>PLAY</button>
            </div>


      </div>
    );
  }
}
