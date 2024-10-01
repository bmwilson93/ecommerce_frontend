import { useState } from 'react';
import { logout } from '../utils/accountUtils';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChage = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit login');
    let result = await logout();
    console.log(result);
  }

  return (
    <div className='login-container'>
      <h2>Log In</h2>
      <form>
      <input type='email' value={email} onChange={handleEmailChange} placeholder='Email'/>
      <input type='password' value={password} onChange={handlePasswordChage} placeholder='Password'/>
        <button 
          className='btn-blue'
          onClick={(e) => {
            handleSubmit(e)
          }}
        >
          Log In
        </button>
      </form>
    </div>
  )
}

export default Login