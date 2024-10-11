import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    // Stipe
    const stripe = useStripe();
    const elements = useElements();

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
          return_url: `${window.location.origin}/checkout/complete`,
        },
      });
  
      if (result.error) {
        // show the error to customer
        console.log(result.error.message);
      } else { // check else if (paymentIntent && paymentIntent.status === 'succeeded')
        // redirect to the 'return_url' use navigate('/return_url');
      }
    };


  return (
    <form onSubmit={handleSubmit}>
      <h1>Test</h1>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
    </form>
  )
}

export default CheckoutForm