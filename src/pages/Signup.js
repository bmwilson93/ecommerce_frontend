import { useState } from 'react';
import { register } from '../utils/accountUtils';
import './Login.css'

const Signup = ({ sessionUser, setSessionUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChage = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault() 
    console.log('submiting signup');
    // build the body object
    let body = JSON.stringify({
      "username": email,
      "password": password,
      "first_name": firstName,
      "last_name": lastName
    })
    // make the call with the register util function
    let result = await register(body);

    //result should be the result + status
    console.log(result);

    // if result.ok -> then succssful register & login, navigate to account page. 
  }

  return (
    <div className='signup-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={firstName} onChange={handleFirstNameChange} placeholder='First Name' />
        <input type='text' value={lastName} onChange={handleLastNameChange} placeholder='Last Name' />
        <input type='email' value={email} onChange={handleEmailChange} placeholder='Email'/>
        <input type='password' value={password} onChange={handlePasswordChage} placeholder='Password'/>
        <button 
          className='btn-blue'
          onClick={(e) => {
            handleSubmit(e)
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup