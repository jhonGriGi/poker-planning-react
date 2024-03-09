import { PropsWithChildren, useState } from "react";
import styles from "./styles.module.scss";

interface CardProps {
  onClick: () => void;
}

type CardPropsWithChildren = PropsWithChildren<CardProps>;

const Card: React.FC<CardPropsWithChildren> = ({ onClick, children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <button
      className={`${isActive ? styles.card__active : styles.card}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Card;
