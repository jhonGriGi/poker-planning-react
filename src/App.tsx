import "./App.css";
import InputRadio from "./ui/atomic/input-radio/input-radio";

function App() {
  return (
    <main>
      <InputRadio id="q" name="test" onChange={() => console.log("")} />
      <InputRadio id="q" name="test" onChange={() => console.log("")} />
    </main>
  );
}

export default App;
