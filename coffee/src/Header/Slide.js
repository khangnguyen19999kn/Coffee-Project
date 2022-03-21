import React, { Component } from "react";
import "./styles.scss";
import { Carousel } from "antd";
import "antd/dist/antd.css";

export default class Slide extends Component {
  contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  slidePic = [
    {
      id: 1,
      src: "./SlidePic/BANNERWEB(1)_693396.jpg",
    },
    {
      id: 2,
      src: "./SlidePic/Web-winningCup_297305.jpg",
    },
    {
      id: 3,
      src: "./SlidePic/BANNERWEB(6)_694799.jpg",
    },
    {
      id: 4,
      src: "./SlidePic/BANNERWEB(7)_809808.jpg",
    },
  ];
  renderSlide = () => {
    let contentSlide = this.slidePic.map((pic, index) => {
      return (
        <div>
          <img src={pic.src}></img>
        </div>
      );
    });
    return contentSlide;
  };
  render() {
    return (
      <div>
        <div className="slide_body">
          
          <div className="slide_content">
            <Carousel autoplay>{this.renderSlide()}</Carousel>
          </div>
        </div>
      </div>
    );
  }
}
