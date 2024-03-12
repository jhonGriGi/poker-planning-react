import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import InputRadio from "../../atomic/input-radio/input-radio";
import LabelAtomic from "../../atomic/label/label-atomic";

interface RadioSelectorProps {
  htmlFor: string;
  inputId: string;
  inputName: string;
  inputOnChange: () => void;
}

type RadioSelectorPropsWithChildren = PropsWithChildren<RadioSelectorProps>;

const RadioSelector: React.FC<RadioSelectorPropsWithChildren> = ({
  htmlFor,
  inputId,
  inputName,
  inputOnChange,
  children,
}) => {
  return (
    <div className={`${styles.section}`}>
      <LabelAtomic htmlFor={htmlFor} properties={styles.label_blue}>{children}</LabelAtomic>
      <InputRadio id={inputId} name={inputName} onChange={inputOnChange} />
    </div>
  );
};

export default RadioSelector;
