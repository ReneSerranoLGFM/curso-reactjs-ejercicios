import "./App.scss";
import { Jokes } from "./components/Jokes";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Jokes />
      </header>
    </div>
  );
}

export default App;
