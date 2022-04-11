import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

function Register() {
  const history = useHistory();

  const navigateTo = (path) => {
    history.push(path);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>Register Page</div>
        <Button
          variant="contained"
          onClick={() => {
            navigateTo("/");
          }}
        >
          Home
        </Button>
      </header>
    </div>
  );
}

export default Register;
