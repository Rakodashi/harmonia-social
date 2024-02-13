// import desktop from "../assets/desktop.jpg"
// import desktop2 from "../assets/desktop2.png"
import desktop3 from "../assets/desktop3.png"
// import mobile from "../assets/10.1.jpg"
import Default from "../assets/2.jpg"

const Hero = () => {
  return ( 
    // readd className="hero-gradient" if needed down below in section
    <section id="hero">

      {/* <div className="hero-info"> */}

          <picture>
            <source media="(min-width: 700px)" srcset={desktop3} />
            <img src={Default} className="desktop" alt="" />
          </picture>

          <div className="overlay">
            <div className="gradientDiv">
              <span><h1>Conheça o projeto</h1>
              <p>Elevando o tom de cultura dos jovens através de musicalização, entretenimento e acesso livre à cultura brasileira</p></span>
            <a href="#about" className="heroBtn">saiba mais</a>
          </div>
        </div>
      {/* </div> */}

    </section>
   );
}
 
export default Hero;