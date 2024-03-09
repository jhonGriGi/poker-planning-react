import InputText from "../../atomic/input-text/input-text";
import LabelAtomic from "../../atomic/label/label-atomic";
import styles from "./styles.module.scss";

const YourName = () => {
  return (
    <section className={`${styles.section}`}>
      <LabelAtomic htmlFor="user-name">Tu nombre</LabelAtomic>
      <InputText id="user-name" onChange={() => console.log()} />
    </section>
  );
};

export default YourName;
