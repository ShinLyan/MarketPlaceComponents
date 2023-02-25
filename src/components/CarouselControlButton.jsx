import styles from "../styles/CarouselControlButton.module.scss";

const CarouselControlButton = function ({ type, x, setX, maxX }) {
  const content = type === "prev" ? "◀" : "▶";
  const style = type === "prev" ? styles.prevButton : styles.nextButton;

  const press = () => {
    console.log("x", x, "   maxX", maxX);

    const offset = 350;
    const direction = type === "prev" ? 1 : -1;
    let newX = x + direction * offset;

    // (maxX; 0)
    const leftBorder = maxX;
    const rightBorder = 0;
    if (type === "prev") {
      newX = Math.min(x + direction * offset, rightBorder);
      //console.log("ууу", Math.min(x + direction * offset, rightBorder));
    } else {
      newX = Math.max(x + direction * offset, leftBorder);
      //console.log("eee", Math.max(x + direction * offset, leftBorder));
    }

    console.log("newX", newX);
    setX(newX);
  };

  return (
    <button className={style} onClick={press}>
      {content}
    </button>
  );
};

export default CarouselControlButton;
