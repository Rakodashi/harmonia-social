import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import evento from "../assets/eventos.png"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import "../index.scss";

const SwiperCardSlider = () => {
  return ( 
    <section id="eventos" className="eventos blue">
      <h1>Eventos</h1>

      <Swiper
        keyboard={{
          enabled: true,
        }}
        centeredSlides={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        lazy={true}
        grabCursor={true}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        spaceBetween={50}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Keyboard, Navigation, Pagination]}
        className="slide-container"
      >

      <div className="slide-container">
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">

            <SwiperSlide className="card swiper-slide">
                  <div className="image-content">
                    <span className="img-overlay">

                      <div className="card-image">
                        <img src={ evento } loading="lazy" className="card-img" alt="" />
                      </div>
                    </span>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Main Title</h2>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, porro.</p>

                    <button className="button">View More</button>
                  </div>
            </SwiperSlide>

            <SwiperSlide className="card swiper-slide">
                  <div className="image-content">
                    <span className="img-overlay">

                      <div className="card-image">
                        <img src={ evento } loading="lazy" className="card-img" alt="" />
                      </div>
                    </span>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Main Title</h2>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, porro.</p>

                    <button className="button">View More</button>
                  </div>
            </SwiperSlide>

            <SwiperSlide className="card swiper-slide">
                  <div className="image-content">
                    <span className="img-overlay">

                      <div className="card-image">
                        <img src={ evento } loading="lazy" className="card-img" alt="" />
                      </div>
                    </span>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Main Title</h2>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, porro.</p>

                    <button className="button">View More</button>
                  </div>
            </SwiperSlide>

            <SwiperSlide className="card swiper-slide">
                  <div className="image-content">
                    <span className="img-overlay">

                      <div className="card-image">
                        <img src={ evento } loading="lazy" className="card-img" alt="" />
                      </div>
                    </span>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Main Title</h2>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, porro.</p>

                    <button className="button">View More</button>
                  </div>
            </SwiperSlide>

            <SwiperSlide className="card swiper-slide">
                  <div className="image-content">
                    <span className="img-overlay">

                      <div className="card-image">
                        <img src={ evento } loading="lazy" className="card-img" alt="" />
                      </div>
                    </span>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Main Title</h2>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, porro.</p>

                    <button className="button">View More</button>
                  </div>
            </SwiperSlide>
            
            <SwiperSlide className="card swiper-slide">
                  <div className="image-content">
                    <span className="img-overlay">

                      <div className="card-image">
                        <img src={ evento } loading="lazy" className="card-img" alt="" />
                      </div>
                    </span>
                  </div>
                  <div className="card-content">
                    <h2 className="name">Main Title</h2>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, porro.</p>

                    <button className="button">View More</button>
                  </div>
            </SwiperSlide>

            <div class="swiper-button-next swiper-navBtn"></div>
            <div class="swiper-button-prev swiper-navBtn"></div>
            <div class="swiper-pagination swiper-navBtn"></div>

          </div>
        </div>
      </div>
      </Swiper>

    </section>
   );
}
 
export default SwiperCardSlider;