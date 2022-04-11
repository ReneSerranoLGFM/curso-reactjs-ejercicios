import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Login(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div>Login Page</div>
        <Button variant="contained" onClick={props.login}>
          Log In
        </Button>
        <Link to="/register">Register here</Link>
      </header>
    </div>
  );
}

export default Login;
