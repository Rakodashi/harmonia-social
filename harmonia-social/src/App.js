import About from "./components/About";
import About2 from "./components/About2";
import "./index.scss";
import Eventos from "./components/Eventos";
// import Eventos2 from "./components/Eventos2";
// import Galeria from "./components/Galeria";
import Galeria2 from "./components/Galeria2";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Home from "./Home";
import Footer from "./components/Footer";
// import ImageSlider from "./components/ImageSlider";
// import ImageSlider3 from "./components/ImageSlider3";
import SwiperCardSlider from "./components/SwiperCardSlider";
import SwiperEvento from "./components/Swiper";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Swiper } from "swiper/react";

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
      <SwiperCardSlider />
      {/* <SwiperEvento /> */}
      {/* <Eventos /> */}
      <About2 />
      {/* <Galeria /> */}
      <Galeria2 />
      <Footer />
    </div>
  );
}

export default App;
