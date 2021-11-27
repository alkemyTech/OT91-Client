import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { getImagesSlides } from "../../Services/slidesService";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Parallax,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../../Styles/Carousel.css";
SwiperCore.use([Parallax, Autoplay, Navigation, Pagination, Scrollbar, A11y]);
const Carousel = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const dataImage = await getImagesSlides();
    setData(dataImage);
  }, []);

  return (
    <Box sx={{
      height: "100%",
    }}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-active-color": "#000",
          "--swiper-navigation-size": "500px",
          textShadow: "0 0 0 #000",
          background: "0 0 0 #000",
        }}
        speed={2000}
        parallax={true}
        loop={true}
        navigation={true}
        Autoplay={true}
        autoplay={{
          delay: 5000,
        }}
      >
        {data?.map((item, index) => (
          <div key={index} data-swiper-parallax="-23%">
            <SwiperSlide
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
              }}
              className="swiperSlide"
            >
              <div className="contentSlide">
                <h2 className="titleSlide" data-swiper-parallax="-300">
                  {item.name}
                </h2>

                <div className="descriptionSlide" data-swiper-parallax="-100">
                  <p>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
