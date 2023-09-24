import About from "./About";
import About2 from "./About2";
import "./App.scss";
import Eventos from "./Eventos";
import Galeria from "./Galeria";
import Header from "./Header";
import Hero from "./Hero";
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
