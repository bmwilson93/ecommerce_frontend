import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { logout } from "../utils/accountUtils";
import { isLoggedIn, getOrders } from "../utils/accountUtils";

import './Account.css';

const Account = ({ sessionUser, setSessionUser }) => {
  const navigate = useNavigate();

  // States
  const [orders, setOrders] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Handle Input State Changes
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }


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

  const handleToggleEdit = () => {
    setIsEditing(prevState => !prevState);
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
              <div className="name-container">
                <div>
                  <label>First Name:</label>

                  {/* Dynamically render either a p tag with the name, or an input to update the name
                      depending on the isEditing state */}
                  {!isEditing 
                  ?
                    <p className="acc-name">{sessionUser.first_name}</p>
                  : 
                    <input 
                    type='text' 
                    value={firstName} 
                    onChange={handleFirstNameChange} 
                    placeholder={sessionUser.first_name}
                    />
                  }

                </div>

                <div>
                  <label>Last Name:</label>

                  {!isEditing
                  ?
                    <p className="acc-name">{sessionUser.last_name}</p>
                  :
                    <input 
                      type='text' 
                      value={lastName} 
                      onChange={handleLastNameChange} 
                      placeholder={sessionUser.last_name}
                    />
                  }

                </div>
              </div>


              <div className="email-container">
                <div>
                  <label>Email:</label>

                  {!isEditing
                  ?
                    <p>{sessionUser.email}</p>
                  :
                    <input 
                      type='email' 
                      value={email} 
                      onChange={handleEmailChange} 
                      placeholder={sessionUser.email}
                    />
                  }

                </div>
              </div>

              {isEditing
              ?
                <button className="acc-btn btn-blue" id='btn-update'>Update</button>
              :
                <></>
              }

            </form>


            <div className="acc-btn-container">
              <div></div>

              <div>
                {/* Edit Button */}
                {!isEditing
                ?
                  <button className='acc-btn btn-blue' onClick={handleToggleEdit}>Edit Account</button> 
                :
                <button className='acc-btn btn-cancel' onClick={handleToggleEdit}>Cancel</button> 
                }
              </div>

              <div>
                {/* Logout Button */}
                <button id='btn-logout' className='acc-btn btn-blue' onClick={() => handleLogout()}>Logout</button>
              </div>

            </div>

          </div>


          <div className="account-order-container acc-container">
            <h2>Your Orders</h2>

            {orders || orders.length > 0
            ?
            <ul>
              {/* Render a list of orders on the account */}
              {orders.map(order => (
                <li 
                key={order.id}
                onClick={() => navigate(`/order/${order.order_number}`, {state:{order: order}})}
                >
                  <div className="acc-order-container">
                    <div>
                      <p>Order #<span className="bold">{order.order_number}</span></p>
                      <p>Ordered on {order.created_at.substring(0, 10)}</p>
                    </div>
                    <div>
                      <p>{order.order_total}</p>
                      <p>{order.items.items.length} items</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            :
            <p>You have no orders</p>
            }
          </div>


        </div> 

        : <></>
      }

    </>
  )
}

export default Account