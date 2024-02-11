import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import evento from "../assets/eventos.png"
// import SwiperCore, { Navigation } from 'swiper';
// SwiperCore.use([Navigation]);


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

const SwiperCardSlider = () => {
  return ( 
    <section id="eventos" className="eventos blue">
      <h1>Eventos</h1>

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

      <Swiper
        keyboard={{
          enabled: true,
        }}
        
        centeredSlides={true}
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
        }}
        navigation={true}
        modules={[Keyboard, Navigation, Pagination]}
        className="slide-container"
      >

      {/* <div className="slide-container"> */}
        <div className="slide-content">
          <div className="card-wrapper swiper-wrapper">
            {/* <div className="card swiper-slide">
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
            </div> */}

          </div>
        </div>



      {/* </div> */}


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

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
        
      </Swiper>

    </section>
   );
}
 
export default SwiperCardSlider;