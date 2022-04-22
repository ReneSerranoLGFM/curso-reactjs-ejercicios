import "./App.scss";
import { ToDoApp } from "./components/ToDoApp";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoApp />
      </header>
    </div>
  );
}

export default App;
