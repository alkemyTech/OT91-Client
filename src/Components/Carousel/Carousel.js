import React, { useEffect, useState } from "react";
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
import LoadingSpinnner from '../../Utils/loadingSpinner'
SwiperCore.use([Parallax, Autoplay, Navigation, Pagination, Scrollbar, A11y]);
const Carousel = () => {
  const [cardsSlides, setCardsSlides] = useState([]);

  const isValidData = (data) => data.length >0;

  useEffect(async () => {
    const cardsDataSlides= await getImagesSlides();
    isValidData(cardsDataSlides) && setCardsSlides(cardsDataSlides);
  }, []);

  return (
    <div className="containerSlide">
      {cardsSlides.length ? (<Swiper
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
          {cardsSlides.map((item, index) => (
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
        </Swiper>) :  <div>
            <LoadingSpinnner
                type="ThreeDots"
                color="#000000"
                height={50}
                width={100}
            />
          </div>
        }
    </div>
  );
};

export default Carousel;
