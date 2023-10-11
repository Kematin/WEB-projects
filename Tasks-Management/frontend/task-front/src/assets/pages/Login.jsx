import { useState } from 'react';
import Input from '../components/ui/Input/Input';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in user:', { username, password });
  };

  return (
    <div>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
