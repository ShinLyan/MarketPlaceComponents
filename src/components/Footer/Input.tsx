import styles from "../../styles/Input.module.scss";
import { ChangeEvent, FC } from "react";

export type InputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = ({ onChange }) => {
  return (
    <input className={styles.input} onChange={onChange} placeholder="Поиск" />
  );
};

export default Input;
