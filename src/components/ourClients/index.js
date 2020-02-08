import React, { Component } from 'react';
import itemCarrousel from "../../images/itemCarrousel.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    slidesToSlide: 5,
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    slidesToSlide: 3,
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default class OurClients extends Component {
  render() {
    return (
      <div className={"mainExt"}>
        <div className={'titleDecor'}>
          <h1>NOSSOS CLIENTES</h1>
          <div id={"decoration"} />
        </div>
        <Carousel
          responsive={responsive}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={false}
          dotListClass="custom-dot-list-style"
        >
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
          <img src={itemCarrousel} />
        </Carousel>
      </div>
    )
  }
}
