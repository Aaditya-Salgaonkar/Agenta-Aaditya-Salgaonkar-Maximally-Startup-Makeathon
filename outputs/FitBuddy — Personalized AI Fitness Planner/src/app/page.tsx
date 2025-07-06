typescript
// pages/index.tsx

import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="mb-10 md:mb-0">
            <p className="inline-block px-3 py-px mb-4 text-teal-800 text-xs font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400">
              Brand New
            </p>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {title}
              <br className="hidden md:block" />
              <span className="inline-block text-deep-purple-accent-400">
                {subtitle}
              </span>
            </h2>
            <p className="mb-8 text-base text-gray-700 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="inline-flex sm:justify-start md:justify-center">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
          <div className="md:mt-16">
            <img
              className="object-cover w-full h-56 rounded shadow-lg md:h-full"
              src="https://source.unsplash.com/random/480x320"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-10 h-10 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 29 45"
              />
            </svg>
          </div>
          <div>
            <p className="mb-2 text-sm font-bold tracking-wider uppercase">
              {icon}
            </p>
            <h6 className="mb-3 text-xl font-bold leading-5">{title}</h6>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: 'Fitness',
      title: 'AI-Generated Fitness Plans',
      description:
        'Our AI analyzes your goals, equipment, and schedule to generate the perfect fitness plan for you.',
    },
    {
      icon: 'Video',
      title: 'Video Demonstrations',
      description:
        'Each exercise comes with a video demonstration, so you know exactly how to do it.',
    },
    {
      icon: 'Track',
      title: 'Progress Tracking',
      description:
        'Track your progress and see how far you’ve come. Stay motivated and reach your goals faster.',
    },
  ];

  return (
    <section className="bg-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Features that make us stand out
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialProps {
  image: string;
  name: string;
  title: string;
  quote: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  image,
  name,
  title,
  quote,
}) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center max-w-xl mx-auto">
        <div className="lg:w-1/3 lg:pr-10 lg:py-6 lg:border-r lg:border-gray-200">
          <img
            className="object-cover w-full h-56 rounded shadow-lg"
            src={image}
            alt=""
          />
        </div>
        <div className="lg:w-2/3">
          <p className="mb-6 text-lg font-medium leading-6 text-gray-900">
            &ldquo;{quote}&rdquo;
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            &mdash; {name}, {title}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      image: 'https://source.unsplash.com/random/100x100/?face',
      name: 'John Doe',
      title: 'Fitness Coach',
      quote:
        'I’ve never seen a platform that can create such personalized fitness plans. My clients love it!',
    },
    {
      image: 'https://source.unsplash.com/random/100x100/?face',
      name: 'Jane Smith',
      title: 'Fitness Enthusiast',
      quote:
        'This AI-generated fitness planner has helped me achieve my goals faster than ever before.',
    },
  ];

  return (
    <section className="bg-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Trusted by Fitness Professionals and Enthusiasts
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PricingPlanProps {
  name: string;
  price: string;
  features: string[];
}

const PricingPlan: React.FC<PricingPlanProps> = ({ name, price, features }) => {
  return (
    <div className="flex flex-col w-full max-w-xs mx-auto lg:mx-0">
      <div className="flex-1 bg-white text-gray-600 rounded-t-lg shadow-lg dark:bg-gray-800 dark:text-gray-300">
        <div className="p-8 text-3xl font-bold text-center border-b-4">
          {name}
        </div>
        <ul className="w-full text-center text-sm">
          {features.map((feature, index) => (
            <li key={index} className="border-b py-4">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none mt-auto bg-gray-100 text-center rounded-b-lg shadow dark:bg-gray-600">
        <div className="p-6">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-xl font-bold block mt-1">/month</span>
          <div className="mt-4">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99',
      features: [
        'Personalized Fitness Plans',
        'Video Demonstrations',
        'Limited Progress Tracking',
      ],
    },
    {
      name: 'Pro',
      price: '$19.99',
      features: [
        'Advanced AI Analysis',
        'Unlimited Progress Tracking',
        'Exclusive Video Content',
      ],
    },
    {
      name: 'Premium',
      price: '$29.99',
      features: [
        'Custom Workout Schedules',
        'Nutrition Guidance',
        'Priority Support',
      ],
    },
  ];

  return (
    <section className="bg-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Choose your perfect plan
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-1">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="bg-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Ready to get started?
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <button className="btn btn-primary mb-3 md:mb-0">Sign Up</button>
          <p className="text-gray-600 text-center md:text-left">
            Already have an account?{' '}
            <a
              href="#"
              className="text-deep-purple-accent-400 hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

const IndexPage = () => {
  const heroProps = {
    title: 'AI-Generated Fitness Plans',
    subtitle: 'Transform Your Fitness Routine',
  };

  return (
    <>
      <Hero {...heroProps} />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
};

export default IndexPage;