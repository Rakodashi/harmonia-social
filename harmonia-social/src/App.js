import About from "./components/About";
import About2 from "./components/About2";
import "./App.scss";
import Eventos from "./components/Eventos";
import Galeria from "./components/Galeria";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./Home";
import Footer from "./components/Footer";

function App() {
  return (
   <div>
      <Header />
      {/* <Home /> */}
      <Hero />
      <About />
      <Eventos />
      <About2 />
      <Galeria />
      <Footer />
   </div> 
  )
}

export default App;
