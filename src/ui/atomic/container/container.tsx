import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface ContainerProps {
  type: "inner" | "medium" | "outer";
  customStyles: React.CSSProperties | undefined;
}

type ContainerPropsWithChildren = PropsWithChildren<ContainerProps>;

const Container: React.FC<ContainerPropsWithChildren> = ({
  type,
  customStyles,
  children,
}) => {
  return (
    <div className={`${styles[type]}`} style={customStyles ?? {}}>
      {children}
    </div>
  );
};

export default Container;
