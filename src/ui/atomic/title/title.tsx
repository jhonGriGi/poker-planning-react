import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type TitlePropsWithChildren = PropsWithChildren;
const Title: React.FC<TitlePropsWithChildren> = ({ children }) => {
  return <h1 className={`${styles.title}`}>{children}</h1>;
};

export default Title;
