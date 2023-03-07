import styles from "../styles/Card.module.scss";

const Card = ({ id, src, onClick, currentImage }) => {
  return (
    <div onClick={onClick} className={styles.thumbnailContainer}>
      <img src={src} alt={id} />

      <div className={id === currentImage ? styles.activeIndicator : null} />
    </div>
  );
};

export default Card;
