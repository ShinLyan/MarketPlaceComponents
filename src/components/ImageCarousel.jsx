import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../Images";
import SliderContainer from "./ImageContainer";
import ScrollButton from "./CarouselControlButton";
import Card from "./Card";
import styles from "../styles/ImageCarousel.module.scss";

const ImageCarousel = () => {
  const [[currentImage, direction], setImage] = useState([0, 0]);
  const [x, setX] = useState(0);
  const sliderWrapperRef = useRef();
  const thumbnailsRef = useRef();
  const rightBorder = useRef();

  const switchToImage = (imageId) => {
    if (imageId === currentImage) return;
    setImage([imageId, imageId > currentImage ? 1 : -1]);
  };

  useEffect(() => {
    rightBorder.current =
      sliderWrapperRef.current.clientWidth - thumbnailsRef.current.clientWidth;
  }, []);

  useEffect(() => {
    // FIX
    setX(
      sliderWrapperRef.current.clientWidth - thumbnailsRef.current.clientWidth
    );
  }, []);

  return (
    <div className={styles.imageCarousel}>
      <SliderContainer direction={direction} currentImage={currentImage} />

      <div className={styles.container}>
        <ScrollButton
          type={"prev"}
          x={x}
          setX={setX}
          maxX={rightBorder.current}
        />

        <div className={styles.sliderWrapper} ref={sliderWrapperRef}>
          <motion.div
            className={styles.thumbnails}
            animate={{ x }}
            transition={{ duration: 0.5, type: "tween" }}
            ref={thumbnailsRef}
          >
            {images.map((image) => (
              /* <Card
                id={image.id}
                src={image.src}
                onClick={() => switchToImage(image.id)}
                currentImage={currentImage}
              /> */

              <div
                key={image.id}
                onClick={() => switchToImage(image.id)}
                className={styles.thumbnailContainer}
              >
                <img src={image.src} alt={image.id} />
                <div
                  className={
                    styles[
                      `activeIndicator ${
                        image.id === currentImage ? "active" : null
                      }`
                    ]
                  } // спросить как сделать
                />
              </div>
            ))}
          </motion.div>
        </div>

        <ScrollButton x={x} setX={setX} maxX={rightBorder.current} />
      </div>
    </div>
  );
};

export default ImageCarousel;
