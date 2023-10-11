import { useState } from 'react';
import Input from '../components/ui/Input/Input';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeat_password, setRepeatPassword] = useState('');

  const handleRegister = () => {
    console.log('Registering user:', { username, password });
  };

  return (
    <div>
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
  );
}

export default Register;
