import RegisterForm from "../components/registerForm/RegisterForm";
import Navbar from '../components/navbar/Navbar';
import { ToastContainer } from 'react-toastify';

function Register() {
   return (
      <div id="register_page">
         <Navbar />
         <h1>Register</h1>
         <RegisterForm /> 
         <ToastContainer />
      </div>
  );
}

export default Register;
