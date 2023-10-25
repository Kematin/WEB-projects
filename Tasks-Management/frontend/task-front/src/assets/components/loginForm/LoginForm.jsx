import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function loginUser() {
        try {
            const response = await axios.post("http://127.0.0.1:8000/auth/jwt/create/", {
                username: username,
                password: password
            });

            const data = response.data
            await moveTokensToStorage(data.refresh, data.access);
            navigate("/")

        } catch (error) {
            console.error("Error while login user:", error);
        }
    }

    async function moveTokensToStorage(refreshToken, accessToken) {
        try {
            Cookies.set("refreshToken", refreshToken);
            Cookies.set("accessToken", accessToken);
            console.log("Tokens moved to cookies successfully.");
        } catch (error) {
            console.error("Error moving tokens to cookies:", error);
        }
    }

    return (
        <div className="form">
            <div id="login">
                <h2>Login</h2>
                <Input
                    label={"Username"}
                    type={"text"}
                    value={username}
                    fnOnChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    label={"Password"}
                    type={"password"}
                    value={password}
                    fnOnChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <Button fnOnClick={loginUser} value="Login"></Button>
            </div>
        </div>
    )
}

export default LoginForm