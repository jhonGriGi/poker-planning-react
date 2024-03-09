import styles from "./styles.module.scss";

interface InputTextProps {
  id: string;
  onChange: () => void;
}
const InputText: React.FC<InputTextProps> = ({ id, onChange }) => {
  return (
    <input
      id={id}
      type="text"
      className={`${styles.input}`}
      onChange={onChange}
    />
  );
};

export default InputText;
