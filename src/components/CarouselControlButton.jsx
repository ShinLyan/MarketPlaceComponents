import styles from "../styles/CarouselControlButton.module.scss";
import prev from "../images/arrowPrev.svg";
import next from "../images/arrowNext.svg";

const CarouselControlButton = function ({ type, x, setX, maxX }) {
  const onClick = () => {
    const offset = 128;
    const direction = type === "prev" ? 1 : -1;

    let newX = x + direction * offset;

    // (maxX; 0)
    const leftBorder = maxX;
    const rightBorder = 0;
    if (type === "prev") {
      newX = Math.min(x + direction * offset, rightBorder);
    } else {
      newX = Math.max(x + direction * offset, leftBorder);
    }
    setX(newX);
  };

  return (
    <button
      className={type === "prev" ? styles.prevButton : styles.nextButton}
      onClick={onClick}
    >
      <img src={type === "prev" ? prev : next} />
    </button>
  );
};

export default CarouselControlButton;
