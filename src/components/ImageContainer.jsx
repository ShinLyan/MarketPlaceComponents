import { images } from "../Images";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/ImageContainer.module.scss";

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),

  active: { x: 0, scale: 1, opacity: 1 },

  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const SliderContainer = function ({ direction, currentImage }) {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentImage}
            style={{
              backgroundImage: `url(${images[currentImage].src})`,
            }}
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            className={styles.image}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SliderContainer;
