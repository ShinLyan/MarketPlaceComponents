import styles from "../styles/ImageCarousel.module.scss";

const Card = (id, src, onClick, currentImage) => {
  return (
    <div onClick={onClick} className={styles.thumbnailContainer}>
      <img src={src} alt={id} />
      {/* <div
      //className={`activeIndicator ${id === currentImage ? "active" : null}`}
      /> */}
    </div>
  );
};

export default Card;
