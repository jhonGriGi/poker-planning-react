import styles from "./styles.module.scss";

interface InputRadioProps {
  id: string;
  name: string;
  onChange: () => void;
}
const InputRadio: React.FC<InputRadioProps> = ({ id, name, onChange }) => {
  return (
    <input
      id={id}
      name={name}
      type="radio"
      className={`${styles.input}`}
      onChange={onChange}
    />
  );
};

export default InputRadio;
