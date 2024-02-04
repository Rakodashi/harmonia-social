import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// import Swiper from "swiper"
import slide_img_1 from "../assets/1.1.jpg";
import slide_img_2 from "../assets/2.jpg";
import slide_img_3 from "../assets/3.jpg";
import slide_img_4 from "../assets/4.jpg";
import slide_img_5 from "../assets/6.jpg";
import slide_img_6 from "../assets/7.jpg";
import slide_img_7 from "../assets/8.1.jpg";

const ImageSlider2 = () => {
  return ( 
    <div className="container">
      <h1 className="heading blue">Eventos</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_img_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_img_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
   );
}
 
export default ImageSlider2 ;