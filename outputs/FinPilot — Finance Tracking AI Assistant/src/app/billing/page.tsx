typescript
// BillingPage.tsx

import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

interface BillingPageProps {
  planId: string;
  customerPortalUrl: string;
}

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string);

const BillingPage: React.FC<BillingPageProps> = ({ planId, customerPortalUrl }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const result = await stripe.confirmCardPayment(process.env.REACT_APP_CLIENT_SECRET as string, {
      payment_method: {
        card: elements.getElement(CardElement) as HTMLInputElement,
        billing_details: {
          name: 'Your Customer Name',
        },
      },
    });

    if (result.error) {
      // Display error.message in your UI.
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
      }
    }
  };

  return (
    <div>
      <h2>Subscription Plan: ${planId}</h2>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Subscribe
        </button>
      </form>
      <a href={customerPortalUrl}>Manage Subscription</a>
    </div>
  );
};

export default BillingPage;