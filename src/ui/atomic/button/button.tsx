import { PropsWithChildren } from "react";
import styles from "./style.module.scss";

interface ButtonProps {
  type: "button-primary" | "button-secondary" | "button-tertiary";
  isDisabled: boolean;
  customStyles: Record<string, string> | undefined;
  onClick: () => void;
}

type ButtonPropsWithChildren = PropsWithChildren<ButtonProps>;

const Button: React.FC<ButtonPropsWithChildren> = ({
  type,
  isDisabled,
  customStyles,
  onClick,
  children,
}) => {
  return (
    <button
      className={`${styles[type]}`}
      style={customStyles}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
