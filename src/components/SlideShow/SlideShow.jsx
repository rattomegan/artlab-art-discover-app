import "./SlideShow.css"
import { useState, useEffect, useRef } from "react";


const images = [
  "https://images.metmuseum.org/CRDImages/ep/web-large/DP-19279-001.jpg",
  "https://images.metmuseum.org/CRDImages/ep/web-large/DT1494.jpg", 
  "https://images.metmuseum.org/CRDImages/ep/web-large/DT1562.jpg"
]
const delay = 2500;

function SlideShow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div 
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, idx) => (
          <img className="slide" key={idx} src={`${image}`} alt="image" />
        ))}
        <div className="slide"></div>
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div 
            key={idx} 
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SlideShow