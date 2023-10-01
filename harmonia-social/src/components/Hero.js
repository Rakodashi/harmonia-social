import hero from "../assets/image_10.png"

const Hero = () => {
  return ( 
    // readd className="hero-gradient" if needed down below in section
    <section id="hero">

      {/* <div className="hero-info"> */}
          <img src={hero} alt="" />
          <div className="overlay"></div>
        <div className="gradientDiv">
          <h1>Projeto X</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima consectetur, nam perspiciatis autem vero laborum exercitationem.</p>
        <a href="#" className="heroBtn">saiba mais</a>
        </div>
      {/* </div> */}

    </section>
   );
}
 
export default Hero;