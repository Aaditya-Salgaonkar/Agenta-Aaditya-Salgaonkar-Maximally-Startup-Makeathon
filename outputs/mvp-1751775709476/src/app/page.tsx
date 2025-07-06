import React from 'react';

const Hero = () => (
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        SnapStats: Lightweight Web Analytics for Developers
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Get the essentials you need to track page views and visitor stats for your projects.
      </p>
      <a
        href="#pricing"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Get Early Access
      </a>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-16">
    <div className="container mx-auto flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Simple and Lightweight</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-md rounded p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Setup</h3>
            <p className="text-gray-700">
              Integrate SnapStats into your projects with minimal effort.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-md rounded p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Basic Metrics</h3>
            <p className="text-gray-700">
              Track page views, visitor stats, and other essential metrics.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-md rounded p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Developer-Friendly</h3>
            <p className="text-gray-700">
              Built for developers, with a focus on simplicity and ease-of-use.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-16">
    <div className="container mx-auto flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Get Early Access</h2>
      <a
        href="#"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Sign Up for Early Access
      </a>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-16">
    <div className="container mx-auto flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Testimonials</h2>
      {/* Add testimonials here */}
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-16">
    <div className="container mx-auto flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">FAQ</h2>
      {/* Add FAQs here */}
    </div>
  </section>
);

const LandingPage = () => (
  <div>
    <Hero />
    <Features />
    <Pricing />
    <Testimonials />
    <FAQ />
  </div>
);

export default LandingPage;