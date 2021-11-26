import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
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

const CarouselCampaign = ({ values }) => {
  return (
    <div
      style={{
        paddingTop: "20px",
      }}
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
          textAlign: "center",
        }}
        grid={{
          gutter: 10,
          minWidth: 300,
          maxWidth: 300,
        }}
        speed={2000}
        parallax={true}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5000,
        }}
      >
        {values.map((slide, index) => (
          <>
            <SwiperSlide key={index}>
              <div data-swiper-parallax="-23%">
                <SwiperSlide
                  className="swiperSlide"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "400 px",
                  }}
                >
                  <Box
                    xs={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={slide.img}
                      alt={slide.title}
                      style={{
                        width: "90%",
                      }}
                    />
                  </Box>
                </SwiperSlide>
              </div>
              <Box
                data-swiper-parallax="-100"
                sx={{
                  display: { xs: "none", xl: "flex" },
                  justifyContent: "center",
                  padding: "20px",
                  fontSize: "1.5rem",
                }}
              >
                {slide.title}
              </Box>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCampaign;
