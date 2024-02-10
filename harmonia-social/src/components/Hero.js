import hero from "../assets/image_10.png"

const Hero = () => {
  return ( 
    // readd className="hero-gradient" if needed down below in section
    <section id="hero">

      {/* <div className="hero-info"> */}
          <img src={hero} alt="" />
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