import { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow } from 'swiper/modules';
import "swiper/css";
import "swiper/css/effect-coverflow";

const Eventos2 = () => {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/assets/eventos.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return ( 
    <section id="eventos" className="blue">
      <div className="container blue">
        <h1 className='eventosTitle'>Eventos</h1>

        <div className="buttons">
          <button onClick={handleLeftClick}>
            <img src="/assets/arrow.svg" alt="Scroll Left" />
          </button>

        <div className="carousel" ref={carousel}>

          {data.map((item) => {
            const {id, name, about, about2, image} = item;
            return ( 
              <div className="item" key={id}>
                <div className="image">
                <img src={image} alt={name} />
                </div>
                <div className="info">
                  <span className="name">{name}</span>
                  <span className="more-info">{about}</span>
                  <span className="even-more-info">{about2}</span>
                </div>
              </div>
            );
          })}
        </div>
        
          <button onClick={handleRightClick}>
            <img src="/assets/arrow.svg" />
          </button>
        </div>
      </div>
    </section>
   );
}
 
export default Eventos2;