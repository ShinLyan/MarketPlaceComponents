import styles from "../../styles/Label.module.scss";
import { FC } from "react";

interface LabelProps {
  value: number;
  text: string;
}

const Label: FC<LabelProps> = ({ value, text }) => {
  return (
    <div className={styles.label}>
      <div className={styles.text}>
        <div>{text}</div>
        <div>{value}</div>
      </div>
    </div>
  );
};

export default Label;
