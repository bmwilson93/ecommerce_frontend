import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { isLoggedIn } from "../utils/accountUtils";

const Checkout = () => {
  const navigate = useNavigate();

  // Check if logged in, if not redirect to the login page
  const checkOnReload = async () => {
    const session = await isLoggedIn();
    if (!session) navigate('/login', {state:{nextPage: '/checkout'}});
  }

  useEffect(() => {
    checkOnReload();
  }, [])

  return (
    <div>Checkout</div>
  )
}

export default Checkout