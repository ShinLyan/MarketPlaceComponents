import React from "react";
import styles from "../../styles/DescriptionCard.module.scss";
import like from "../../images/like.svg";

const LikeButton = () => {
  return (
    <button className={styles.button_wrapper}>
      <img src={like} alt="like" />
    </button>
  );
};

export default LikeButton;
