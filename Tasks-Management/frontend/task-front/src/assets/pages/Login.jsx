import LoginForm from "../components/loginForm/LoginForm";
import Navbar from '../components/navbar/Navbar';
import { ToastContainer } from 'react-toastify';


function Login() {
  return (
    <div id="login_page">
      <Navbar />
      <h1>Login</h1>
      <LoginForm />
      <ToastContainer />
    </div>
  );
}

export default Login;
