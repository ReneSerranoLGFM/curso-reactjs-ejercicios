import logo from "./logo.svg";
import "./App.css";
import ComponenteA from "./components/ComponenteA";
import Clock, { ClockClass } from "./components/Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        {/* <ClockClass /> */}
      </header>
    </div>
  );
}

export default App;
