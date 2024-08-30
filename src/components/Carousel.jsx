import { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const previousImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  const nextImageIndex = (currentImageIndex + 1) % images.length;

  return (
    <div className="w-full h-full flex gap-2 ">
      <button onClick={handlePrev} className="text-2xl">
        ⬅️
      </button>
      <Card variant="pictures">
        <img
          src={images[previousImageIndex]}
          alt="Previous Carousel Image"
          width={150}
          height={150}
          className="rounded-xl"
        />
      </Card>
      <Card variant="pictures">
        <img src={images[currentImageIndex]} alt="Carousel Image" width={300} height={300} className="rounded-xl" />
      </Card>
      <Card variant="pictures">
        <img src={images[nextImageIndex]} alt="Next Carousel Image" width={150} height={150} className="rounded-xl" />
      </Card>
      <button onClick={handleNext} className="text-2xl">
        ➡️
      </button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Carousel;
