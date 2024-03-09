import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface LabelAtomicProps {
  htmlFor: string;
}

type LabelAtomicPropsWithChildren = PropsWithChildren<LabelAtomicProps>;

const LabelAtomic: React.FC<LabelAtomicPropsWithChildren> = ({
  htmlFor,
  children,
}) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default LabelAtomic;
