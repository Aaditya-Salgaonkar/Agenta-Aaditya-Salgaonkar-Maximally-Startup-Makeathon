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
      <div className="container mx-auto flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-4 text-gray-800">
            {title}
          </h1>
          <p className="text-2xl mb-8 text-gray-600">{subtitle}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

interface FeaturesProps {
  features: { title: string; description: string }[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Powerful Features
        </h2>
        <div className="flex flex-wrap">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  {feature.title}
                </div>
                <ul className="w-full text-center text-sm">
                  <li className="border-b py-4">Lorem ipsum dolor.</li>
                  <li className="border-b py-4">Lorem ipsum dolor.</li>
                  <li className="border-b py-4">Lorem ipsum dolor.</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialProps {
  testimonials: {
    name: string;
    title: string;
    quote: string;
  }[];
}

const Testimonials: React.FC<TestimonialProps> = ({ testimonials }) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Testimonials
        </h2>
        <div className="flex flex-wrap">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  {testimonial.name}
                </div>
                <p className="text-xl leading-relaxed mt-6 mb-4 text-gray-800">
                  {testimonial.quote}
                </p>
                <div className="text-xl text-gray-600">{testimonial.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface PricingProps {
  pricing: {
    name: string;
    price: string;
    features: string[];
  }[];
}

const Pricing: React.FC<PricingProps> = ({ pricing }) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Pricing
        </h2>
        <div className="flex flex-wrap">
          {pricing.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
            >
              <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                  {item.name}
                </div>
                <div className="text-3xl text-center font-bold mt-6 border-b-2 pb-6">
                  ${item.price}
                </div>
                <ul className="w-full text-center text-sm">
                  {item.features.map((feature, index) => (
                    <li key={index} className="border-b py-4">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CTAProps {
  ctaText: string;
}

const CTA: React.FC<CTAProps> = ({ ctaText }) => {
  return (
    <section className="bg-blue-500 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">{ctaText}</h2>
        <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default function Home() {
  const heroProps: HeroProps = {
    title: 'Share Your Files Securely',
    subtitle:
      'Upload files and share them with unique download links and expiration times. Notify users via email.',
    buttonText: 'Sign Up Now',
  };

  const featuresProps: FeaturesProps = {
    features: [
      {
        title: 'Easy Upload',
        description:
          'Easily upload files with a simple drag-and-drop interface or by selecting files from your device.',
      },
      {
        title: 'Unique Download Links',
        description:
          'Generate unique, time-limited download links for each file to ensure secure access.',
      },
      {
        title: 'Email Notifications',
        description:
          'Automatically notify users via email when a file is shared or a download is completed.',
      },
    ],
  };

  const testimonialsProps: TestimonialProps = {
    testimonials: [
      {
        name: 'John Doe',
        title: 'CEO, Example Corp',
        quote:
          'Secure File Share has revolutionized the way we collaborate on projects. The unique download links and email notifications make it easy to share files with my team.',
      },
      {
        name: 'Jane Doe',
        title: 'CTO, Example Corp',
        quote:
          'The user interface is intuitive and easy to use. I can quickly upload and share files without any hassle.',
      },
    ],
  };

  const pricingProps: PricingProps = {
    pricing: [
      {
        name: 'Free',
        price: '0',
        features: [
          'Up to 10 files',
          '5 GB storage',
          '1 day expiration',
          'Email support',
        ],
      },
      {
        name: 'Pro',
        price: '9.99',
        features: [
          'Unlimited files',
          '100 GB storage',
          '14 days expiration',
          'Priority email support',
        ],
      },
    ],
  };

  const ctaProps: CTAProps = {
    ctaText: 'Ready to start sharing files securely? Sign up now!',
  };

  return (
    <div>
      <Hero {...heroProps} />
      <Features {...featuresProps} />
      <Testimonials {...testimonialsProps} />
      <Pricing {...pricingProps} />
      <CTA {...ctaProps} />
    </div>
  );
}