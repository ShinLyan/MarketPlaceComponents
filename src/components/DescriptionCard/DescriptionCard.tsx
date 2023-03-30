import React from "react";
import Description from "./Description.tsx";
import styles from "../../styles/DescriptionCard.module.scss";
import PriceCard from "./PriceCard.tsx";
import { Currencies } from "./PriceCard.tsx";

const DescriptionCard = () => {
  return (
    <div className={styles.description_card}>
      <Description />
      <PriceCard price={1990} currency={Currencies.Rubles} />
    </div>
  );
};

export default DescriptionCard;
