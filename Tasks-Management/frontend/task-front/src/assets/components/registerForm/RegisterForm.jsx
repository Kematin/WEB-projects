import { useState } from 'react';
import Input from '../ui/Input/Input';

function RegisterForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat_password, setRepeatPassword] = useState('');
    
    const handleRegister = () => {
        console.log('Registering user:', { username, password });
    };

    return (
        <div className="form">
            <div id="register">
                <h2>Register</h2>
                <Input 
                    label="Username"
                    type="text"
                    value={username}
                    fnOnChange={(e) => setUsername(e.target.value)} />
                <br />
                <Input 
                    label="Email"
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
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    )
}

export default RegisterForm