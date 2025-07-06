typescript
// pages/index.tsx

import React from 'react';

interface FeatureProps {
  title: string;
  subtitle: string;
  icon: string;
}

const Feature = ({ title, subtitle, icon }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-check w-10 h-10"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
};

const hero = {
  title: 'Smarter Finances for Freelancers and Solo Entrepreneurs',
  subtitle:
    'Our AI-based assistant automatically categorizes income/expenses, forecasts cash flow, and sends smart savings suggestions based on transaction data.',
  image: 'path/to/hero-image.svg',
};

const features: FeatureProps[] = [
  {
    title: 'Smart Categorization',
    subtitle:
      'Automatically categorize income and expenses with high accuracy, saving you time and effort.',
    icon: 'activity',
  },
  {
    title: 'Cash Flow Forecasting',
    subtitle:
      'Stay on top of your financial future with accurate cash flow forecasts, helping you make informed decisions.',
    icon: 'trending-up',
  },
  {
    title: 'Proactive Savings Suggestions',
    subtitle:
      'Receive personalized savings suggestions based on your income, expenses, and financial goals.',
    icon: 'credit-card',
  },
];

const testimonials = [
  {
    author: 'John Doe',
    quote:
      'Since I started using this AI-based assistant, I have more time to focus on my business and less time worrying about finances.',
  },
  {
    author: 'Jane Smith',
    quote:
      'This tool has been a game-changer for my solo entrepreneurship. Accurate categorization and smart savings suggestions help me stay on top of my finances.',
  },
];

const pricing = [
  {
    title: 'Starter',
    price: 9.99,
    features: [
      'Up to 50 transactions per month',
      'Basic categorization',
      'Email support',
    ],
  },
  {
    title: 'Pro',
    price: 24.99,
    features: [
      'Unlimited transactions',
      'Advanced categorization',
      'Priority email support',
      'Phone support',
    ],
  },
];

const CTA = () => {
  return (
    <div className="bg-indigo-50 py-12 sm:py-16">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
          Ready to take control of your finances?
        </h2>
        <p className="text-gray-500 mt-4">
          Get started with our AI-based assistant today and experience the
          difference.
        </p>
        <div className="mt-8">
          <button className="btn btn-indigo">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};

const IndexPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            {hero.title}
          </h2>
          <p className="mt-4 text-gray-500 sm:text-xl max-w-xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
      </div>
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-extrabold text-gray-800">
            Key Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {features.map((feature, index) => (
              <Feature
                key={index}
                title={feature.title}
                subtitle={feature.subtitle}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12 sm:py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-extrabold text-gray-800">
            Testimonials
          </h3>
          <div className="mt-8 space-y-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow rounded-lg"
              >
                <p className="text-gray-500">{testimonial.quote}</p>
                <p className="mt-2 text-gray-700">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-extrabold text-gray-800">
            Pricing
          </h3>
          <div className="mt-8 space-y-4">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-medium text-gray-800">
                    {plan.title}
                  </h4>
                  <span className="text-xl font-medium text-gray-800">
                    ${plan.price}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 mt-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-gray-500">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default IndexPage;