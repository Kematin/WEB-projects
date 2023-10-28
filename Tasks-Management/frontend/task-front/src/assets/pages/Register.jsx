import RegisterForm from "../components/registerForm/RegisterForm";
import Navbar from '../components/navbar/Navbar';

function Register() {
   return (
      <div id="register_page">
         <Navbar />
         <h1>Register</h1>
         <RegisterForm /> 
      </div>
  );
}

export default Register;
