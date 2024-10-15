import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { logout } from "../utils/accountUtils";
import { isLoggedIn, getOrders } from "../utils/accountUtils";

const Account = ({ sessionUser, setSessionUser }) => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState(null)

  // Check if logged in, if not redirect to the login page
  const checkOnReload = async () => {
    const session = await isLoggedIn();
    if (!session) navigate('/login');

    // if session, then fetch the accounts orders
    const orders = await getOrders();
    setOrders(orders);
  }

  const handleLogout = async () => {
    await logout();
    setSessionUser(null);
    navigate('/');
  }

  useEffect(() => {
    checkOnReload();
  }, [])

  return (
    <>
      {
        // Only render the page is there is a session
        sessionUser ? 

        <div className="account-container">
          <p>First Name</p>
          <p>{sessionUser.first_name}</p>
          <p>Last Name</p>
          <p>{sessionUser.last_name}</p>
          <p>Email</p>
          <p>{sessionUser.email}</p>
          <button onClick={() => handleLogout()}>Logout</button>


          <div className="account-order-container">
            <h2>Your Orders</h2>
            <ul>

              {/* Render a list of orders on the account */}
              {orders.map(order => (
                <li>
                  <div>
                    {order.order_number}
                    {order.order_total}
                    {order.created_at}
                    {order.items.items.length}
                  </div>
                </li>
              ))}

            </ul>
          </div>


        </div> 

        : <></>
      }

    </>
  )
}

export default Account