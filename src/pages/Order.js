import { useLocation, Link } from 'react-router-dom'
import OrderList from '../components/OrderList';

import './Complete.css';
import './Order.css';

const Order = () => {
  const location = useLocation();
  const order = location.state.order;

  return (
    <div className='order-container'>
      <h2>Order #<span className="bold ">{order.order_number}</span></h2>
      <p>Order Total: <span className="price">${(order.order_total / 100).toFixed(2)}</span></p>
      <p>Ordered on {order.created_at.substring(0, 10)}</p>

      <OrderList items={order.items.items} />

      <Link to="/account">Back to Account</Link>

    </div>
  )
}

export default Order