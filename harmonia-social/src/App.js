import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import About from "./components/About";
import About2 from "./components/About2";
import "./index.scss";
import Eventos from "./components/Eventos";
// import Galeria from "./components/Galeria";
import Galeria2 from "./components/Galeria2";
// import Galeria3 from "./components/Galeria3";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Home from "./Home";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import ImageSlider2 from "./components/ImageSlider2";
import ImageSlider3 from "./components/ImageSlider3";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// const slides = [
//   { url: "http://localhost:3000/image-1.jpg", title: "beach" },
//   { url: "http://localhost:3000/image-2.jpg", title: "boat" },
//   { url: "http://localhost:3000/image-3.jpg", title: "forest" },
//   { url: "http://localhost:3000/image-4.jpg", title: "city" },
//   { url: "http://localhost:3000/image-5.jpg", title: "italy" },
// ];

// const containerStyles = {
//   width: "500px",
//   height: "280px",
//   margin: "0 auto",
// };

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <Hero />
      <About />
      {/* <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={500} />
      </div> */}
      <ImageSlider2 />
      <Eventos />
      <About2 />
      {/* <Galeria /> */}
      {/* <Galeria2 /> */}
      {/* <Galeria3 /> */}
      <Footer />
    </div>
  );
}

export default App;
