import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

import '../pages/Checkout.css';

const CheckoutForm = () => {
    // Stipe
    const stripe = useStripe();
    const elements = useElements();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded
        //Make sure to disable form submittion until Stripe.js has loaded. 
        return;
      }
  
      const result = await stripe.confirmPayment({
        // `Elements` instance that was used to create the Payment Element
        elements, 
        confirmParams: {
          return_url: `${window.location.origin}/complete`,
        },
        redirect: 'if_required',
      });
  
      if (result.error) {
        // show the error to customer
        console.log(result.error.message);

      } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded'){
        // Create the order and then navigate to the complete page and send the new order info        
        const orderTotal = result.paymentIntent.amount;
        const paymentId = result.paymentIntent.id

        const newOrder = await fetch(`${process.env.REACT_APP_API_PATH}/orders/new`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "order_total": orderTotal,
            "payment_id": paymentId
          }),
          credentials: "include"
        }
      )
      const order = await newOrder.json();

      //navigate to complete page and send state neworder
      navigate(`/complete/${order.order_number}`, {state:{newOrder: order}});

      } // put more elses here to handle other status
    };


  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="payment-container">
      <h1>Checkout</h1>
        <PaymentElement />
      <button className="btn-blue btn-checkout" disabled={!stripe}>Place Order</button>
      </div>
    </form>
  )
}

export default CheckoutForm