import "./App.scss";
import TaskList from "./components/TaskList";
import Button from "@mui/material/Button";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <TaskList />
        <Button variant="contained" onClick={props.logout}>
          Logout
        </Button>
      </header>
    </div>
  );
}

export default App;
