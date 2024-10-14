import { useLocation, Link } from "react-router-dom";

const Complete = ({ cart, sessionUser }) => {
  const location = useLocation();
  const newOrder = location.state.newOrder;

  return (
    <div>
      {newOrder.order_number ? (
        <div>
          <h1>Thank you for your order!</h1>

          <p>{newOrder.order_number}</p>
          <p>{newOrder.order_total}</p>

          <Link to="/products">Continue Shopping</Link>

        </div>
      ) : <></>}
    </div>
  )
}

export default Complete