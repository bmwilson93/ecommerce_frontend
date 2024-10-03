import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const Account = ({ sessionUser }) => {
  const navigate = useNavigate();
  // useEffect(() => {}, [])

  return (
    // TODO check if sessionUser is null, if not logged in, redirect to the login route,
    // else render the account page
    <>
      {
        sessionUser ? 
        <div>
          <p>First Name</p>
          <p>{sessionUser.first_name}</p>
          <p>Last Name</p>
          <p>{sessionUser.last_name}</p>
          <p>Email</p>
          <p>{sessionUser.email}</p>
        </div> 
        : navigate('/login')
      }

    </>
  )
}

export default Account