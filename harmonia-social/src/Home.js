import About from "./components/About";
import About2 from "./components/About2";
import Eventos from "./components/Eventos";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";
import Hero from "./components/Hero";

const Home = () => {
  return ( 
    <div className="home">
      <Hero />
      <About />
      <Eventos />
      <About2 />
      <Galeria />
      <Footer />
    </div>
   );
}
 
export default Home;