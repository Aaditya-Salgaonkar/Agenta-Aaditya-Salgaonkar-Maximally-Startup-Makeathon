import React from 'react';

const BillingPage = () => {
  // Use the Stripe library to retrieve the current customer's subscription info
  const customer = Stripe.customer.retrieve('cus_123');
  const subscription = customer.subscriptions.data[0];

  return (
    <div>
      <h1>Billing Information</h1>
      <p>Current Plan: {subscription.plan.nickname}</p>
      <p>Status: {subscription.status}</p>
      <a href={subscription.latest_invoice.payment_intent.payment_method_details.url}>Pay Now</a>
      <a href={Stripe.billingPortal.create('cus_123')}>Manage Subscription</a>
    </div>
  );
};

export default BillingPage;