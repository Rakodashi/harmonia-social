import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
// import { Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

const SwiperCardSlider = () => {
  return ( 
    <section id="eventos" className="eventos blue">
      {/* <h1>Eventos</h1> */}

      {/* <div className="slide-container swiper mySwiper">
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">
            <div className="card swiper-slide">
              <div className="image-content">
                <span className="img-overlay">

                  <div className="card-image">
                    <img src="../assets/eventos.png" className="card-img" alt="" />
                  </div>
                </span>
              </div>
              <div className="card-content">
                <h2 className="name">Main Title</h2>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, porro.</p>

                <button className="button">View More</button>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>

      </div> */}

      {/* slidesPerView={3}
      spaceBetween={30}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true} */}

      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        spaceBetween={30}
        loop={true}
        scrollbar={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </section>
   );
}
 
export default SwiperCardSlider;