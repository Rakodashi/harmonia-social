// import galeria from "../assets/galeria.png"
import galeria1 from "../assets/10.1.jpg"
import galeria2 from "../assets/1.1.jpg"
import galeria3 from "../assets/9.3.jpg"
import galeria4 from "../assets/9.7.jpg"

const Galeria = () => {
  return ( 
    <section id="gallery" className="blue">
      <h1>Galeria</h1>
      
      <span>
        <div className="eventoCard">
          <img src={galeria1} alt="" />
        </div>
        <div className="eventoCard">
          <img src={galeria2} alt="" />
        </div>
        <div className="eventoCard">
          <img src={galeria3} alt="" />
        </div>
        <div className="eventoCard">
          <img src={galeria4} alt="" />
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