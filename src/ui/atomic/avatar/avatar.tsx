import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface AvatarProps {
  customStyles: Record<string, string> | undefined;
}

type AvatarPropsWithChildren = PropsWithChildren<AvatarProps>;

const Avatar: React.FC<AvatarPropsWithChildren> = ({
  customStyles,
  children,
}) => {
  return (
    <p className={`${styles.avatar}`} style={customStyles ?? {}}>
      {children}
    </p>
  );
};

export default Avatar;
