import { useLocation, Link } from "react-router-dom";
import OrderList from "../components/OrderList";

import './Complete.css';

const Complete = ({ cart, sessionUser }) => {
  const location = useLocation();
  const newOrder = location.state.newOrder;

  return (
    <div>
      {newOrder.order_number ? (
        <div className='complete-container'>
          <h1>Thank you for your order!</h1>

          <p>Order #<span className="bold ">{newOrder.order_number}</span></p>
          <p>Total <span className="price">{newOrder.order_total}</span></p>

          <OrderList items={newOrder.items.items} />

          <Link to="/products">Continue Shopping</Link>

        </div>
      ) : <></>}
    </div>
  )
}

export default Complete