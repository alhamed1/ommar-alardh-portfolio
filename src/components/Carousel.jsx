import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const elementRef = useRef();

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    hiddenLeft: {
      x: "-100%",
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    visible: {
      x: "0",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
      },
    },
    exitRight: {
      x: "-100%",
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5,
      },
    },
    exitLeft: {
      x: "100%",
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.5,
      backgroundColor: "#ff00008e",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "left" : "right");
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex-1 w-full h-full py-8 flex flex-col justify-center items-center overflow-clip">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          animate="visible"
          initial={direction === "right" ? "hiddenLeft" : "hiddenRight"}
          exit={direction === "right" ? "exitLeft" : "exitRight"}
          variants={slideVariants}
          className="object-contain h-full rounded-box absolute"
        />
      </AnimatePresence>{" "}
      <motion.div
        className="absolute left-3 top-1/2 bg-black bg-opacity-50 text-white flex items-center justify-center w-12 h-12 rounded-full cursor-pointer z-10"
        variants={slidersVariants}
        whileHover="hover"
        onClick={handlePrevious}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute right-3 top-1/2 bg-black bg-opacity-50 text-white flex items-center justify-center w-12 h-12 rounded-full cursor-pointer z-10"
        variants={slidersVariants}
        whileHover="hover"
        onClick={handleNext}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h13M12 5l7 7-7 7" />
        </svg>
      </motion.div>
      <div className="absolute bottom-0  pb-4 z-10 flex items-center justify-center">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}
          ></motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ "object-fit": "contain" }}>
      <div className="carousel-images">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            style={{ "object-fit": "contain" }}
          />
        </AnimatePresence>
        <div className="slide_direction"></div>
      </div>
      <div className="carousel-indicator"></div>
    </div>
  );
};
export default Carousel;
