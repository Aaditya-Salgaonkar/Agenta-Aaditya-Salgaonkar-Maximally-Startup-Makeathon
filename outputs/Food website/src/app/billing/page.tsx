<html>
  <head>
    <title>Subscription Management</title>
  </head>
  <body>
    <h1>Welcome to our Subscription Management Page</h1>
    <h2>Your Subscription Details:</h2>
    <ul>
      <li>Plan: {{ subscription.plan.product.name }}</li>
      <li>Quantity: {{ subscription.quantity }}</li>
      <li>Status: {{ subscription.status }}</li>
      <li>Current Period Ends: {{ subscription.current_period_end }}</li>
    </ul>
    <form action="/api/customer/stripe_portal" method="POST">
      <button type="submit">Manage Subscription</button>
    </form>
    <script src="https://js.stripe.com/v3/"></script>
    <script>
      async function loadCheckout() {
        const stripe = Stripe('{{ YOUR_STRIPE_PUBLISHABLE_KEY }}');
        const response = await fetch('/api/customer/stripe_portal', { method: 'POST' });
        const { sessionId } = await response.json();
        await stripe.redirectToCheckout({ sessionId });
      }
      document.querySelector('form').addEventListener('click', (e) => {
        e.preventDefault();
        loadCheckout();
      });
    </script>
  </body>
</html>