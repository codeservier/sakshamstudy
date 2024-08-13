import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/Capture.png";
// import image2 from "../../assets/Capture1.png";
// import image3 from "../../assets/Capture3.png";

const ImageSlider = () => {
  const settings = {
    arrows: false, // Remove navigation arrows
    dots: false, // Remove navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="w-full h-400 object-cover">
      <div>
        <img src={image1} alt="Slide 1" />
      </div>
      <div>
        <img src={image1} alt="Slide 2" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
