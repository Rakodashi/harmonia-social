import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import evento from "../assets/eventos.png"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperCardSlider = () => {
  return ( 
    <section id="eventos" className="eventos blue">
      <h1>Eventos</h1>

      <Swiper
        keyboard={{
          enabled: true,
        }}
        centeredSlides={true}
        fadeEffect={true}
        grabCursor={true}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
        }}
        // spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Keyboard, Navigation, Pagination]}
        className="slide-container"
      >

      <div className="slide-container">
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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