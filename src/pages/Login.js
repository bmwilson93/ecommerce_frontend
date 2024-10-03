import { useState } from 'react';
import { login } from '../utils/accountUtils';
import './Login.css'

const Login = ({ sessionUser, setSessionUser }) => {
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
    console.log('submiting login');
    // build the body object
    let body = JSON.stringify({
      "username": email,
      "password": password
    })
    // make the call with the login util function
    let result = await login(body);
    setSessionUser(result);
    // if result.ok -> then succssful login, navigate to next page. 
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