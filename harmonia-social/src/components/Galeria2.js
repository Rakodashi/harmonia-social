import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "../data";
import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
// import { Captions } from "yet-another-react-lightbox/plugins";
import Images from "./Images";


const Galeria2 = () => {
  const [index, setIndex] = useState(-1);
  // const captionsRef = React.useRef(null);

  return ( 
    <section id="gallery" className="blue">
      <h1>Galeria</h1>

      <Images data={ slides } onClick={(currentIndex) => setIndex(currentIndex)} />

      <Lightbox
        plugins={[Counter]}
        // captions={{
        //   showToggle: true,
        //   descriptionTextAlign: 'center',
        // }}
        counter={{ container: { style: { top: "unset", top: 0} } }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={ slides }
      />
    </section>
   );
}
 
export default Galeria2;