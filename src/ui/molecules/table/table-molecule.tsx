import Container from "../../atomic/container/container";

const TableMolecule = () => {
  return (
    <Container type="outer" customStyles={undefined}>
      <Container type="medium" customStyles={undefined}>
        <Container type="inner" customStyles={undefined}></Container>
      </Container>
    </Container>
  );
};

export default TableMolecule;
