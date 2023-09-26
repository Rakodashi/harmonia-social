import galeria from "../assets/galeria.png"

const Galeria = () => {
  return ( 
    <section id="gallery" className="blue">
      <h1>Galeria</h1>
      
      <span>
        <div className="eventoCard">
          <img src={galeria} alt="" />
        </div>
        <div className="eventoCard">
          <img src={galeria} alt="" />
        </div>
        <div className="eventoCard">
          <img src={galeria} alt="" />
        </div>
        <div className="eventoCard">
          <img src={galeria} alt="" />
        </div>
      </span>

      <div className="galeriaText">
        <h1>Nosso Projeto</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quam sunt placeat!</p>
      </div>
    </section>
   );
}
 
export default Galeria;