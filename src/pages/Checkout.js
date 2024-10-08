import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { isLoggedIn } from "../utils/accountUtils";

import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const Checkout = () => {
  const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    appearance: {
      theme: 'night'
    }
  };

  const [clientSecret, setClientSecret] = useState("")

  const navigate = useNavigate();

  // Check if logged in, if not redirect to the login page
  const checkOnReload = async () => {
    const session = await isLoggedIn();
    if (!session) navigate('/login', {state:{nextPage: '/checkout'}});

    // if user is logged in, then get stripe client secret
    const result = await fetch(`${process.env.REACT_APP_API_PATH}/orders/create-payment-intent`, {
      method: "POST",
      // body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    });
    const secret = await result.json();
    console.log(secret.client_secret);
    setClientSecret(secret.client_secret);
  }

  useEffect(() => {
    checkOnReload();
  }, [])

  return (
    <div>
      <h1>hi</h1>
      {console.log(clientSecret)}
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default Checkout