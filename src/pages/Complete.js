import { useLocation, Link } from "react-router-dom";

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

          <ul>
            {newOrder.items.items.map(item => (
              <li className="order-list-li">
                <div>

                  <div>
                    <img src={item.product.product_img} alt="product image"/>
                  </div>

                  <div className="order-item-details">
                    <p className='order-product-name'>{item.product.name}</p>
                    {/* <p>qty: {item.qty}</p> */}
                    {/* <p>${item.product.price.toFixed(2)}</p> */}
                    <div>
                      <p>
                        (<span className='price-sign'>$</span>
                        <span className=''>{item.product.price.toFixed(2)} x {item.qty} </span>)
                      </p>
                      <p className='order-price-line-item'>
                        <span className='price-sign'></span>
                        <span className='price cart-price'>${(item.product.price * item.qty).toFixed(2)}</span>
                      </p>

                    </div>
                  </div>

                </div>
              </li>
            ))}
          </ul>

          <Link to="/products">Continue Shopping</Link>

        </div>
      ) : <></>}
    </div>
  )
}

export default Complete