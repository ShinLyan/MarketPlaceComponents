import React from "react";
import styles from "../../styles/Price.module.scss";
import basket from "../../images/basket.svg";

export enum Currencies {
  Rubles,
  Dollars,
  Euro,
}

interface PriceCardProps {
  price: number;
  currency: Currencies;
}

const PriceCard: FC<PriceCardProps> = ({ price, currency }) => {
  const currencyText = getCurrencyText();

  function getCurrencyText() {
    switch (currency) {
      case Currencies.Dollars: {
        return "$";
      }
      case Currencies.Rubles: {
        return "руб";
      }
      case Currencies.Euro: {
        return "€";
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.price}>
        <div>{price}</div>
        <div>{currencyText}</div>
      </div>

      <button className={styles.basket_button}>
        <img src={basket} alt="basket" />
        <div className={styles.button_text}>В корзину</div>
      </button>
    </div>
  );
};

export default PriceCard;
