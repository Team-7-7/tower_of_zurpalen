import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section id="main">
      <h1>Login</h1>
      <h2>Login form goes here</h2>
      <h3>Option to Register</h3>
      <button onClick={(e) => navigate("/register")}>Need to Register?</button>
    </section>
  );
};

// C: no need for the .. in the navigate call
// C: there is a login folder which has two login components. can we incorporate one of those here or replace this component which is currently being used for /login

export default Login;
