import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

// Import images
import image1 from "../../assets/1.1.png";
import image2 from "../../assets/1.2.png";
import image3 from "../../assets/1.3.png";
import image4 from "../../assets/1.4.png";
import image5 from "../../assets/1.1.png";
import image6 from "../../assets/1.2.png";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable previous and next buttons
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 2000, // Slide change interval in milliseconds
  };

  return (
    <div className="self-center">
      <Slider {...settings}>
        <div className="h- 400 w-200  object-contain  ">
          <img
            src={image1}
            alt="Slide 1"
            className="h- 400 w-200  object-cover rounded-xl"
          />
        </div>
        <div className="h- 400 w-200   object-contain ">
          <img
            src={image2}
            alt="Slide 2"
            className="h- 400 w-200  object-cover rounded-xl"
          />
        </div>
        <div className="h-500   object-contain">
          <img
            src={image3}
            alt="Slide 3"
            className="h- 400 w-200  object-cover rounded-xl"          />
        </div>
        <div className="h- 400 w-200   object-contain">
          <img
            src={image4}
            alt="Slide 4"
           className="h- 400 w-200   object-contain  rounded-xl"
          />
        </div>
        <div className="h- 400 w-200   object-contain">
          <img
            src={image5}
            alt="Slide 5"
            className="h- 400 w-200   object-contain rounded-xl"
          />
        </div>
        <div className="h- 400 w-200   object-contain">
          <img
            src={image6}
            alt="Slide 6"
            className="h- 400 w-200   object-contain rounded-xl"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
