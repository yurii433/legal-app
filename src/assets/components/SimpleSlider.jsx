import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const SliderWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  margin: 0 auto;
  padding: 55px;
  max-width: 100%;
  .slick-track {
    display: flex;
    align-items: center;
  }

  .slide {
    padding: 0 15px;
    box-sizing: border-box;
    img {
      width: 100%;
      height: auto;
      max-height: 100%;
      object-fit: contain;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    color: var(
      --text-color-navy
    ) !important; /* Add !important to override existing styles */
  }

  .slick-prev:hover:before,
  .slick-next:hover:before {
    color: lightgray !important; /* Add !important to override existing styles */
  }
  .slick-dots {
    margin: 10px;
    bottom: -65px;
  }

  .slick-dots li {
    color: #2b3d59;
    width: 50px;
    height: 10px;
  }
  .slick-dots li button {
    color: #2b3d59;
  }

  @media screen and (min-width: 1310px) {
    max-width: 1300px;
  }
`;

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    swipeToSlide: true,
    pauseOnHover: true,
    arrows: false,

    appendDots: (dots) => <ul>{dots}</ul>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 997,
        settings: {
          slidesToShow: 3,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((value, index) => (
          <div className="slide" key={`partner-${value}-${index}`}>
            <img
              src={`./images/partners/partner-${value}.svg`}
              alt={`partner-${value}`}
            />
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default SimpleSlider;
