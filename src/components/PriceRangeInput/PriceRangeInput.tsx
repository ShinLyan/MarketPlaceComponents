import { useState } from "react";
import RangeInput from "./RangeInput.tsx";
import Label from "./Label.tsx";
import styles from "../../styles/PriceRangeInput.module.scss";

interface PriceRangeInputProps {
  min: number;
  max: number;
  step: number;
}

const PriceRangeInput: FC<PriceRangeInputProps> = ({ min, max, step }) => {
  const [value, setValue] = useState({ min: min, max: max });

  return (
    <div className={styles.wrapper}>
      <p>Цена</p>
      <RangeInput
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={setValue}
      />

      <div className={styles.label_wrapper}>
        <Label value={value.min} text={"от"} />
        <Label value={value.max} text={"до"} />
      </div>
    </div>
  );
};

export default PriceRangeInput;
