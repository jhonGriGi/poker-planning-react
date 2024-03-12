import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface LabelAtomicProps {
  htmlFor: string;
  properties: string;
}

type LabelAtomicPropsWithChildren = PropsWithChildren<LabelAtomicProps>;

const LabelAtomic: React.FC<LabelAtomicPropsWithChildren> = ({
  htmlFor,
  properties,
  children,
}) => {
  return (
    <label className={`${styles.label} ${properties}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default LabelAtomic;
