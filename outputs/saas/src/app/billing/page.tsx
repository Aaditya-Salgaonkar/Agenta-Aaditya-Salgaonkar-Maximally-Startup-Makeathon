<html>
  <head>
    <meta charset="utf-8" />
    <title>Billing Page</title>
    <script src="https://js.stripe.com/v3/"></script>
  </head>
  <body>
    <h1>Subscription Details</h1>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody id="subscription-items"></tbody>
    </table>
    <button id="manage-subscription">Manage Subscription</button>
    <script>
      const stripe = Stripe('your_publishable_key');

      async function fetchSubscriptionDetails() {
        const response = await fetch('/api/subscription');
        const subscription = await response.json();
        return subscription;
      }

      async function displaySubscriptionDetails() {
        const subscription = await fetchSubscriptionDetails();
        const subscriptionItems = document.getElementById('subscription-items');
        subscriptionItems.innerHTML = '';
        subscription.items.data.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${item.price.product.name}</td>
            <td>${item.price.unit_amount / 100} ${item.price.currency}</td>
            <td>${item.quantity}</td>
          `;
          subscriptionItems.appendChild(row);
        });
      }

      document.getElementById('manage-subscription').addEventListener('click', async () => {
        const response = await stripe.redirectToCheckout({
          sessionId: 'your_session_id'
        });
      });

      displaySubscriptionDetails();
    </script>
  </body>
</html>