import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../app/SlidesReducer/slidesReducer";
import { Box } from "@mui/material";
import { getImagesSlides } from "../../Services/slidesService";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingSpinner from "../../Utils/loadingSpinner";
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
import { setCKEditorText } from "../../Components/common/ckEditor/setCKEditorText";
SwiperCore.use([Parallax, Autoplay, Navigation, Pagination, Scrollbar, A11y]);

const Carousel = () => {
  const dispatch = useDispatch();
  const allSlides = useSelector((state) => state.slides.data);
  const isLoading = useSelector((state) => state.slides.isLoading);

  useEffect(() => {
    dispatch(actions.getAllImages());
  }, []);

  return (
    <Box>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-pagination-active-color": "#000",
          "--swiper-navigation-size": "80px",
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
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          allSlides.map((item, index) => (
            <Box key={index} sx={{}} data-swiper-parallax="-23%">
              <SwiperSlide
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundPosition: "center",
                  height: "580px",
                  backgroundRepeat: "no-repeat",
                  boxSizing: "border-box",
                }}
              >
                <SwiperSlide
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    alignContent: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      // flexDirection: "column",
                      alignItems: "center",
                      padding: "0 0 0 50px",
                      marginTop: "15%",
                    }}
                  >
                    <h2
                      style={{
                        color: "#fff",
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        marginRight: "10px",
                      }}
                      data-swiper-parallax="-300"
                    >
                      {item.name}
                    </h2>
                    <Box
                      sx={{
                        color: "#fff",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        marginLeft: "10px",
                      }}
                      data-swiper-parallax="-100"
                    >
                      <p>
                        {item.description &&
                          setCKEditorText(item, "description")}
                      </p>
                    </Box>
                  </Box>
                </SwiperSlide>
              </SwiperSlide>
            </Box>
          ))
        )}
      </Swiper>
    </Box>
  );
};

export default Carousel;
