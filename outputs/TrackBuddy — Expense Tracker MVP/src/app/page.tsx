typescript
// pages/index.tsx

import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText }) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex px-6 items-center justify-between flex-col lg:flex-row">
        <h1 className="text-5xl text-center lg:text-left lg:w-1/2 title-font font-medium text-gray-900">
          {title}
          <br className="hidden lg:inline-block" />
          {subtitle}
        </h1>
        <div className="flex lg:w-1/2 lg:justify-end lg:items-center mt-10 lg:mt-0">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="text-xl font-medium text-gray-600">{title}</div>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: 'Easy to use',
      description:
        'Log your income and expenses in a simple, beginner-friendly interface.',
    },
    {
      title: 'Visualize trends',
      description:
        'Understand your spending habits with beautiful, easy-to-understand charts and graphs.',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl text-center title-font mb-12 font-medium text-gray-900">
          Features
        </h1>
        <div className="flex flex-wrap -m-4">
          {features.map((feature, index) => (
            <Feature key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialProps {
  quote: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="text-xl font-medium text-gray-600">{quote}</div>
      <div className="text-gray-500">- {author}</div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'I love how simple it is to log my income and expenses. I can finally understand where my money is going.',
      author: 'John Doe - Student',
    },
    {
      quote:
        'As a freelancer, I need a way to keep track of my finances. This app is perfect for that.',
      author: 'Jane Smith - Freelancer',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl text-center title-font mb-12 font-medium text-gray-900">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} quote={testimonial.quote} author={testimonial.author} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, features }) => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col">
      <div className="font-medium text-gray-600">{title}</div>
      <div className="font-medium text-gray-600 mt-2">{price}</div>
      <p className="text-gray-500">{description}</p>
      <ul className="text-gray-500 space-y-2 mt-6">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="w-full text-white bg-indigo-500 border-0 py-2 mt-6 focus:outline-none hover:bg-indigo-600 rounded">
        Button
      </button>
    </div>
  );
};

const Pricing = () => {
  const pricingCards = [
    {
      title: 'Basic',
      price: '$9/month',
      description: 'For those who are starting out.',
      features: [
        'Up to 100 transactions',
        'Basic analytics',
        'Email support',
      ],
    },
    {
      title: 'Pro',
      price: '$29/month',
      description: 'For those who need more power.',
      features: [
        'Unlimited transactions',
        'Advanced analytics',
        'Priority email support',
        'Phone support',
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl text-center title-font mb-12 font-medium text-gray-900">
          Pricing
        </h1>
        <div className="flex flex-wrap -m-4">
          {pricingCards.map((pricingCard, index) => (
            <PricingCard key={index} {...pricingCard} />
          ))}
        </div>
      </div>
    </section>
  );
};

const IndexPage: React.FC = () => {
  const heroProps: HeroProps = {
    title: 'Track your finances',
    subtitle: 'The easy way',
    buttonText: 'Get Started',
  };

  return (
    <div className="flex flex-col items-center">
      <Hero {...heroProps} />
      <Features />
      <Testimonials />
      <Pricing />
    </div>
  );
};

export default IndexPage;