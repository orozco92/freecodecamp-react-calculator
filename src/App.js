import fccLogo from "./assets/fcc-logo.svg";
import Calculator from "./components/calculator/calculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={fccLogo} alt="fcc-logo" />
      </div>
      <Calculator />
    </div>
  );
}

export default App;
