import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { data } from "../elements/SliderData";

import "../scss/Swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Jumbotron() {
  return (
    <React.Fragment>
      <Container>
        <Swiper
          className="swiper-container"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {data.map((item, index) => {
            return (
              <React.Fragment key={Date.now()}>
                <SwiperSlide key={index}>
                  <Link to="/postlist">
                    <img src={item.img} alt={index + 1} />
                  </Link>
                </SwiperSlide>
              </React.Fragment>
            );
          })}
        </Swiper>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 800px;
  @media screen and (max-width: 768px) {
    width: 500px;
  }
`;

export default Jumbotron;
