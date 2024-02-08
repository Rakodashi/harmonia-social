import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "../data";
import "yet-another-react-lightbox/styles.css";
// import { Fullscreen } from "yet-another-react-lightbox/plugins";
// import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Images from "./Images"


const Galeria2 = () => {
  const [open, setOpen] = useState(false);
  // const captionsRef = React.useRef(null);

  return ( 
    <section id="gallery" className="blue">
      <h1>Galeria</h1>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Images data={ slides } onClick={() => {}} />

      <Lightbox
        plugins={[Counter]}
        // captions={{
        //   showToggle: true,
        //   descriptionTextAlign: 'center',
        // }}
        counter={{ container: { style: { top: "unset", top: 0} } }}
        open={open}
        close={() => setOpen(false)}
        slides={ slides }
      />
    </section>
   );
}
 
export default Galeria2;