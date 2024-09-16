import React, { useState } from "react";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <img
          src={pictures[currentIndex]}
          alt={`Appartement ${currentIndex + 1}`}
          className="carousel-image"
        />
        {pictures.length > 1 ? (
          <>
            <div className="carousel-navigation">
              <button onClick={goToPrevious} className="carousel-arrow left">
                &#10094;
              </button>
              <button onClick={goToNext} className="carousel-arrow right">
                &#10095;
              </button>
            </div>
            <div className="carousel-counter">
              {currentIndex + 1}/{pictures.length}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Carousel;
