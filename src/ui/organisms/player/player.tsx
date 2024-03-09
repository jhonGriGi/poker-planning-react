import Button from "../../atomic/button/button";
import Container from "../../atomic/container/container";
import RadioSelector from "../../molecules/radio-selector/radio-selector";
import YourName from "../../molecules/your-name/your-name";
import styles from "./styles.module.scss";
import { containerCustomStyle } from "./custom-styles";

const Player = () => {
  return (
    <Container customStyles={containerCustomStyle} type="inner">
      <YourName></YourName>
      <section className={`${styles.section}`}>
        <RadioSelector
          htmlFor="player"
          inputId="player"
          inputName="player"
          inputOnChange={() => console.log()}
        >
          jugador
        </RadioSelector>
        <RadioSelector
          htmlFor="player"
          inputId="player"
          inputName="player"
          inputOnChange={() => console.log()}
        >
          espectador
        </RadioSelector>
      </section>
      <Button
        customStyles={undefined}
        isDisabled={false}
        onClick={() => console.log()}
        type="button-secondary"
      >
        Continuar
      </Button>
    </Container>
  );
};

export default Player;
