import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          AI-Powered Freelancer Hiring for Startups
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Quickly hire vetted freelancers for short-term or project-based work. Auto-matching, budget estimation, and milestone tracking.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold mb-12">Features</h2>
        <div className="flex flex-wrap -mx-3">
          {/* Replace with your actual features */}
          <div className="lg:w-1/3 md:w-1/2 px-3 mb-6">
            <article className="h-full shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">Auto-matching</h2>
                <p className="text-gray-700">
                  We use AI to match you with the best freelancers for your project.
                </p>
              </div>
            </article>
          </div>
          {/* More features */}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold mb-12">Pricing</h2>
        <div className="flex flex-wrap -mx-3">
          {/* Replace with your actual pricing plans */}
          <div className="lg:w-1/3 md:w-1/2 px-3 mb-6">
            <article className="h-full shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">Starter</h2>
                <p className="text-gray-700">
                  Perfect for small projects and startups.
                </p>
                <p className="text-2xl font-bold mt-4">$99</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Sign Up
                </button>
              </div>
            </article>
          </div>
          {/* More pricing plans */}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold mb-12">Testimonials</h2>
        <div className="flex flex-wrap -mx-3">
          {/* Replace with your actual testimonials */}
          <div className="lg:w-1/3 md:w-1/2 px-3 mb-6">
            <article className="h-full shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <p className="text-gray-700">
                  "This platform has been a game-changer for our startup. We've been able to find and hire top-notch freelancers quickly and easily."
                </p>
                <p className="text-gray-600 text-sm mt-2">- John Doe, Founder</p>
              </div>
            </article>
          </div>
          {/* More testimonials */}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold mb-12">FAQ</h2>
        <div className="flex flex-col lg:flex-row lg:-mx-3">
          {/* Replace with your actual FAQs */}
          <div className="lg:w-1/3 px-3 mb-6">
            <details className="bg-white shadow-lg rounded-lg p-6">
              <summary className="font-bold text-lg mb-2">
                How does the auto-matching work?
              </summary>
              <p className="text-gray-700">
                Our AI analyzes your project requirements and matches you with the best freelancers for the job.
              </p>
            </details>
          </div>
          {/* More FAQs */}
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default LandingPage;