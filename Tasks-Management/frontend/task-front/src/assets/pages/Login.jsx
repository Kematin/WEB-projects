import LoginForm from "../components/loginForm/LoginForm";
import Navbar from '../components/navbar/Navbar';

function Login() {
  return (
    <div id="login_page">
      <Navbar />
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
