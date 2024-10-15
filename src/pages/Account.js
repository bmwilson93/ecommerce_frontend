import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { logout } from "../utils/accountUtils";
import { isLoggedIn, getOrders } from "../utils/accountUtils";

import './Account.css';

const Account = ({ sessionUser, setSessionUser }) => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    checkOnReload();
  }, [])

  return (
    <>
      {
        // Only render the page is there is a session
        sessionUser && orders ? 

        <div className="account-container">

          <div className="account-details-container acc-container">

            <h2>Your Account</h2>

            <form onSubmit={handleSubmit}>
              <div>

                <div>
                  <label>First Name:</label>
                  <p>{sessionUser.first_name}</p>
                </div>

                <div>
                  <label>Last Name:</label>
                  <p>{sessionUser.last_name}</p>
                </div>

              </div>


              <div>
                <label>Email:</label>
                <p>{sessionUser.email}</p>
              </div>

              <button>Edit Account</button>
            </form>


            <button onClick={() => handleLogout()}>Logout</button>

          </div>


          <div className="account-order-container acc-container">
            <h2>Your Orders</h2>
            <ul>

              {/* Render a list of orders on the account */}
              {orders.map(order => (
                <li>
                  <div>
                    <p>Order #{order.order_number}</p>
                    <p>{order.order_total}</p>
                    <p>{order.created_at}</p>
                    <p>{order.items.items.length} items</p>
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