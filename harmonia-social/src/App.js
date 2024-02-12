import About from "./components/About";
import About2 from "./components/About2";
import Eventos from "./components/Eventos";
import Galeria from "./components/Galeria";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Home from "./Home";
import Footer from "./components/Footer";
import SwiperCardSlider from "./components/SwiperCardSlider";
import SwiperEvento from "./components/Swiper";
import "./index.scss";
import "yet-another-react-lightbox/styles.css";

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <Hero />
      <About />
      {/* <SwiperCardSlider /> */}
      {/* <SwiperEvento /> */}
      {/* <Eventos /> */}
      <About2 />
      <Galeria />
      <Footer />
    </div>
  );
}

export default App;
