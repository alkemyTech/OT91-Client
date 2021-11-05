import React, { useEffect, useState } from "react";
import { getImageInfo } from "../../Services/ongInfoServices";
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
import Styles from "./Carousel.module.css";
SwiperCore.use([Parallax, Autoplay, Navigation, Pagination, Scrollbar, A11y]);
const Carousel = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const dataImage = await getImageInfo();
    setData(dataImage);
  }, []);

  console.log(data);
  return (
    <div className={Styles.containerCarousel}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          textShadow: "0 0 0 #000",
        }}
        grid={{
          gutter: 10,
          minWidth: 300,
          maxWidth: 300,
        }}
        speed={2000}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        Autoplay={true}
        autoplay={{
          delay: 5000,
        }}
      >
        {data?.map((item, index) => (
          <div key={index} style={{}} data-swiper-parallax="-23%">
            <SwiperSlide
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
              }}
              className={Styles.swiperSlide}
            >
              <div className={Styles.contentSlide}>
                <h2 className={Styles.title} data-swiper-parallax="-300">
                  {item.name}
                </h2>

                <div className={Styles.description} data-swiper-parallax="-100">
                  <p>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;