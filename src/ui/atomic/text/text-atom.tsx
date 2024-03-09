import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

type TextAtomPropsWithChildren = PropsWithChildren;

const TextAtom: React.FC<TextAtomPropsWithChildren> = ({ children }) => {
  return <p className={`${styles.text}`}>{children}</p>;
};

export default TextAtom;
