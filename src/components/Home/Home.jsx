import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const Home = () => {
  return (
    <Carousel
      infiniteLoop={true}
      showStatus={false}
      autoPlay={true}
      interval={3000}
      showThumbs={true}
      renderThumbs={() =>
        [banner1, banner2, banner3].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className="h-[40px] w-full object-cover mx-2"
          />
        ))
      }
    >
      <div>
        <img
          src={banner1}
          className="h-[250px] md:h-[400px] lg:h-[600px] w-full "
          alt="Slide 1"
        />
      </div>
      <div>
        <img
          src={banner2}
          className="h-[250px] md:h-[400px] lg:h-[600px] w-full "
          alt="Slide 2"
        />
      </div>
      <div>
        <img
          src={banner3}
          className="h-[250px] md:h-[400px] lg:h-[600px] w-full "
          alt="Slide 3"
        />
      </div>
    </Carousel>
  );
};

export default Home;
