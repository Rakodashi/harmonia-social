// import eventos from "../assets/eventos.png"
import eventos1 from "../assets/2.jpg"
import eventos2 from "../assets/4.jpg"
import eventos3 from "../assets/8.1.jpg"
import eventos4 from "../assets/9.1.jpg"

const Eventos = () => {
  return ( 
    <section id="eventos" className="blue">
      <h1>Eventos</h1>
      
      <span>
        <div className="eventoCard">
          <img src={eventos1} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="eventoCard">
          <img src={eventos2} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="eventoCard">
          <img src={eventos3} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="eventoCard">
          <img src={eventos4} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </span>
    </section>
   );
}
 
export default Eventos;