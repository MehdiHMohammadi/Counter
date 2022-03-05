import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/Counters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counters value="Count" />
      </header>
    </div>
  );
}

export default App;
