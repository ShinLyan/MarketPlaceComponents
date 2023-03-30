import { FC, useState, useEffect } from "react";
import styles from "../../styles/RangeInput.module.scss";

interface RangeInputProps {
  min: number;
  max: number;
  value: { min: number; max: number };
  step: number;
  onChange: (value: { min: number; max: number }) => void;
}

const RangeInput: FC<RangeInputProps> = ({
  min,
  max,
  value,
  step,
  onChange,
}) => {
  const [minValue, setMinValue] = useState(value ? value.min : min);
  const [maxValue, setMaxValue] = useState(value ? value.max : max);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMinValue = Math.min(+event.target.value, maxValue - step);
    if (!value) setMinValue(newMinValue);
    onChange({ min: newMinValue, max: maxValue });
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Math.max(+event.target.value, minValue + step);
    if (!value) setMaxValue(newMaxValue);
    onChange({ min: minValue, max: newMaxValue });
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <input
          className={styles.input}
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </div>
      <div className={styles.controlWrapper}>
        <div className={styles.control} style={{ left: `${minPos}%` }} />
        <div className={styles.rail}>
          <div
            className={styles.innerRail}
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          />
        </div>
        <div className={styles.control} style={{ left: `${maxPos}%` }} />
      </div>
    </div>
  );
};

export default RangeInput;
