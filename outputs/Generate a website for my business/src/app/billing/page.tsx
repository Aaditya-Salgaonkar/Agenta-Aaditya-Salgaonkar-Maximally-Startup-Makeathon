import stripe
stripe.api_key = "your_stripe_secret_key"

customer = stripe.Customer.retrieve("cus_123")
subscription = customer.subscriptions.retrieve("sub_123")

# Generate a link to the Stripe Billing portal
portal_session = stripe.checkout.Session.create(
    customer=customer.id,
    payment_method_types=["card"],
    subscription_data={
        'items': [
            {'plan': subscription.items.data[0].plan.id, 'quantity': 1}
        ],
    },
    client_reference_id=customer.id,
    url_scheme="stripe_checkout_app://host/return",
    return_url="https://example.com/account",
    cancel_url="https://example.com/checkout",
    mode="setup",
    payment_method_options={
        'card': {
            'request_three_d_secure': 'any',
        }
    }
)

manage_subscription_button = f'<a href="{portal_session.url}" target="_blank">Manage Subscription</a>'

subscription_details = f'Active Subscription: {subscription.items.data[0].plan.name} - ${subscription.items.data[0].plan.amount/100}/month'