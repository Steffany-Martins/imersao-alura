import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

const Container = styled.ul`
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 40x;
    height: 40px;

    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 12px;

  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider
      {...{
        dots: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        focusOnSelect: true,
        draggable: true,
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
