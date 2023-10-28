import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat_password, setRepeatPassword] = useState('');
    const navigate = useNavigate()

    async function registerUser() {
        console.log(`Register new user ${username}`);
        if (checkPasswords()) {
            addUserToServer()
        } else {
            console.log("Passwords are not correct");
        }
    }
    
    async function addUserToServer() {
        try {
            await axios.post("http://127.0.0.1:8000/auth/users/", {
                email: email,
                username: username,
                password: password
            });
            navigate("/login")

        } catch (error) {
            console.error("Error while register user:", error);
        }
    }

    function checkPasswords() { 
        if (password === repeat_password) {
            return true
        } else {
            return false
        }
    }
    

    return (
        <div className="form">
            <div id="register_form">
                <Input 
                    label="Username"
                    type="text"
                    value={username}
                    fnOnChange={(e) => setUsername(e.target.value)} />
                <br />
                <Input 
                    label="EEEMail"
                    type="email"
                    value={email}
                    fnOnChange={(e) => setEmail(e.target.value)} />
                <br />
                <Input
                    label="Password"
                    type="password"
                    value={password}
                    fnOnChange={(e) => setPassword(e.target.value)} />
                <br />
                <Input
                    label="Repeat Password"
                    type="password"
                    value={repeat_password}
                    fnOnChange={(e) => setRepeatPassword(e.target.value)} />
                <br />
                <Button fnOnClick={registerUser} value="Register"></Button>
            </div>
        </div>
    )
}

export default RegisterForm