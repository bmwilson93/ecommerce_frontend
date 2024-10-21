import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { login } from '../utils/accountUtils';
import './Login.css'

const Login = ({ sessionUser, setSessionUser }) => {
  const navigate = useNavigate();
  const location = useLocation();

  let nextPage = '/account';
  if (location.state) {nextPage = location.state.nextPage};

  // States for form inputs
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
    // build the body object
    let body = JSON.stringify({
      "username": email,
      "password": password
    })
    // make the call with the login util function
    let result = await login(body);
    setSessionUser(result);
    // clear the password state
    setPassword('');
    navigate(nextPage);
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
      <p className='toggle-link'>Don't have an account? <a onClick={() => {navigate(`/signup`, {state:{nextPage: nextPage}})}}>Sign Up</a></p>
    </div>
  )
}

export default Login