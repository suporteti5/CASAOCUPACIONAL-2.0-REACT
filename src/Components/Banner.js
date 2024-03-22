import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

/* Images */

import BannerImage from "../Assets/Banner/Banner-001.png";
import BannerImage2 from "../Assets/Banner/Banner-002.png";
import BannerImage3 from "../Assets/Banner/Banner-003.png";
import BannerImage4 from "../Assets/Banner/Banner-004.png";

const Home = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showArrows={true}
        showIndicator={false}
        showStatus={false}
        showThumbs={false}
        emulateTouch={true}
        width="100%"
      >
        <div>
          <img alt="Banner-001" src={BannerImage} />
        </div>
        <div>
          <img alt="Banner-002" src={BannerImage2} />
        </div>
        <div>
          <img alt="Banner-003" src={BannerImage3} />
        </div>
        <div>
          <img alt="Banner-004" src={BannerImage4} />
        </div>
      </Carousel>
    </>
  );
};

export default Home;
