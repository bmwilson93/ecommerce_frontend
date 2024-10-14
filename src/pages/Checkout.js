import { useEffect, useState } from "react"
import { useNavigate, useLocation, Route, Routes, Outlet } from 'react-router-dom'
import { isLoggedIn } from "../utils/accountUtils";

// Stripe Imports
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Components
import CheckoutForm from "../components/CheckoutForm";


const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);


const Checkout = () => {
  const location = useLocation();
  const cartTotal = location.state ? location.state.cartTotal : 0;

  const [clientSecret, setClientSecret] = useState("")

  const navigate = useNavigate();

  // Check if logged in, if not redirect to the login page
  const checkOnReload = async () => {
    const session = await isLoggedIn();
    if (!session) navigate('/login', {state:{nextPage: '/checkout'}});

    console.log(location.pathname);
    // only generate a paymentIntent if path != /checkout/complete
    if (location.pathname != '/checkout/complete') {
      // if user is logged in, then get stripe client secret
      const result = await fetch(`${process.env.REACT_APP_API_PATH}/orders/create-payment-intent`, {
        method: "POST",
        body: JSON.stringify({"amount": cartTotal * 100}), // * by 100 to get the total in cents for stripe
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
      });
      const secret = await result.json();
      console.log(`secret.client_secret: ${secret.client_secret}`);
      setClientSecret(secret.client_secret);

    }
  }

  useEffect(() => {
    checkOnReload();
  }, [])

  return (
    <div>
      <h1>hi</h1>
      {console.log(`clientSecret: ${clientSecret}`)}
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default Checkout