import { useCallback, useEffect, useRef, useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "fff",
  zIndex: 1,
  cursor: "pointer",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
  margin: "4rem 0"
};

const dotContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyles = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};
const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.3s",
};
const slidesContainerOverflowStyles = {
  overflow: "hidden",
  height: "100%",
}

const ImageSlider = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] =useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`
  });
  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`
  })
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    console.log("use effect");
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return ( 
    <section id="eventos" style={sliderStyles}>
      <h1 className="blue">Eventos</h1>

      <div>
        <div style={leftArrowStyles} onClick={goToPrevious}>❮</div>
        <div style={rightArrowStyles} onClick={goToNext}>❯</div>
      </div>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div key={slideIndex} style={getSlideStylesWithBackground(slideIndex)}></div>
          ))}
        </div>
      </div>
      <div style={dotContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div 
          key={slideIndex} 
          style={dotStyles} 
          onClick={() => goToSlide(slideIndex)}
          >●</div>
        ))}
      </div>
    </section>
   );
};
 
export default ImageSlider;