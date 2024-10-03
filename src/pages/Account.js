import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { logout } from "../utils/accountUtils";
import { isLoggedIn } from "../utils/accountUtils";

const Account = ({ sessionUser, setSessionUser }) => {
  const navigate = useNavigate();

  // Check if logged in, if not redirect to the login page
  const checkOnReload = async () => {
    const session = await isLoggedIn();
    if (!session) navigate('/login');
  }

  const handleLogout = async () => {
    await logout();
    setSessionUser(null);
    navigate('/');
  }

  useEffect(() => {
    console.log('useEffect Account.js')
    checkOnReload();
  }, [])

  return (
    <>
      {
        // Only render the page is there is a session
        sessionUser ? 
        <div>
          <p>First Name</p>
          <p>{sessionUser.first_name}</p>
          <p>Last Name</p>
          <p>{sessionUser.last_name}</p>
          <p>Email</p>
          <p>{sessionUser.email}</p>
          <button onClick={() => handleLogout()}>Logout</button>
        </div> 
        : <></>
      }

    </>
  )
}

export default Account