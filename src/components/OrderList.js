import React from 'react'

const OrderList = ({ items }) => {
  return (
    <>
      <ul>
            {items.map(item => (
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
                        <span className=''>{(item.product.price / 100).toFixed(2)} x {item.qty} </span>)
                      </p>
                      <p className='order-price-line-item'>
                        <span className='price-sign'></span>
                        <span className='price cart-price'>${((item.product.price * item.qty) / 100).toFixed(2)}</span>
                      </p>

                    </div>
                  </div>

                </div>
              </li>
            ))}
          </ul>
    </>
  )
}

export default OrderList