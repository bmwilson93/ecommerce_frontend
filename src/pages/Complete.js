import { useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js"

const Complete = () => {
  const stripe = useStripe();


  useEffect (() => {
    if (!stripe) {
      return
    }

    // Retrieve the 'payment_intent_client_secret" query parameter applied to return_url
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    // Retrieve PaymentIntent
    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({paymentIntent}) => {
        if (paymentIntent.status === 'succeeded') {
          // create new order
          // send info to the server to create the order
          // then display the returned order info
        }
      })
  }, [stripe]);


  return (
    <div>Complete</div>
  )
}

export default Complete