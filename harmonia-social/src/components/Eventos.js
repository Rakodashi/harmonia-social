import eventos from "../assets/eventos.png"

const Eventos = () => {
  return ( 
    <section id="eventos" className="blue">
      <h1>Eventos</h1>
      
      <span>
        <div className="eventoCard">
          <img src={eventos} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="eventoCard">
          <img src={eventos} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="eventoCard">
          <img src={eventos} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="eventoCard">
          <img src={eventos} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </span>
    </section>
   );
}
 
export default Eventos;