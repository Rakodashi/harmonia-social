import { Carousel } from "yet-another-react-lightbox"
import img1 from "../assets/1.1.jpg"
import img2 from "../assets/1.2.jpg"
import img3 from "../assets/2.jpg"
import img4 from "../assets/3.jpg"
import img5 from "../assets/4.jpg"

const ImageSlider3 = () => {
  const eventosContainer = document.querySelector('.eventos-container');
  const eventosControlsContainer = document.querySelector('.eventos-controls');
  const eventosControls = ['previous', 'next'];
  const eventosItems = document.querySelectorAll('.eventos-item');

  class Eventos {

    constructor(container, items, controls) {
      this.EventosContainer = container;
      this.EventosControls = controls;
      this.EventosArray = [...items];
    }

    updateEventos() {
      this.EventosArray.forEach(el => {
        el.classList.remove('eventos-item-1');
        el.classList.remove('eventos-item-2');
        el.classList.remove('eventos-item-3');
        el.classList.remove('eventos-item-4');
        el.classList.remove('eventos-item-5');
      });

      this.EventosArray.slice(0, 5).forEach((el, i) => {
        el.classList.add(`eventos-item-${i + 1}`);
      });
    }

    setCurrentState(direction) {
      if (direction.className == 'eventos-controls-previous') {
        this.EventosArray.unshift(this.EventosArray.pop());
      } else {
        this.EventosArray.push(this.EventosArray.shift());
      }
      this.updateEventos();
    }

    setControls() {
      this.EventosControls.forEach(control => {
        eventosControlsContainer.appendChild(document.createElement('button')).className = `eventos-controls-${control}`;
        document.querySelector(`eventos-controls-${control}`).innerText = control;
      });
    }

    useControls() {
      const triggers = [...eventosControlsContainer.childNodes];
      triggers.forEach(control => {
        control.addEventListener('click', e => {
          e.preventDefault();
          this.setCurrentState(control);
        });
      });
    }
  }

  const exampleEventos = new Carousel (eventosContainer, eventosItems, eventosControls);

  exampleEventos.setControls();
  exampleEventos.useControls();

  return ( 
    <div className="eventos">
      <div className="eventos-container">
        <img className="eventos-item eventos-item-1" src={img1} data-index="1" alt="" />
        <img className="eventos-item eventos-item-2" src={img2} data-index="2" alt="" />
        <img className="eventos-item eventos-item-3" src={img3} data-index="3" alt="" />
        <img className="eventos-item eventos-item-4" src={img4} data-index="4" alt="" />
        <img className="eventos-item eventos-item-5" src={img5} data-index="5" alt="" />
      </div>
      <div className="eventos-controls"></div>
    </div>
   );
}
 
export default ImageSlider3;