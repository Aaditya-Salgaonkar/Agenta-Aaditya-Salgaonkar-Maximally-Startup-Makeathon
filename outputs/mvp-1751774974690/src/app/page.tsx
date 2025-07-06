import { FaQuestionCircle, FaStar } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">SnapStats</h1>
        <p className="text-xl text-gray-600 mb-8">
          A lightweight web analytics tool designed for indie developers and startup founders who just need basic page view and visitor stats.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign up for early access
        </button>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Features</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gray-200 p-8 rounded shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Basic Page View Stats</h3>
              <p className="text-gray-600">Track page views and unique visitors with ease.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gray-200 p-8 rounded shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Simple Setup</h3>
              <p className="text-gray-600">Get up and running in minutes with simple, easy-to-follow instructions.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-gray-200 p-8 rounded shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Affordable Pricing</h3>
              <p className="text-gray-600">Pay a low monthly fee for access to all features.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Pricing</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="bg-white p-8 rounded shadow m-4 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Basic</h3>
            <p className="text-gray-600">$9/month</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Up to 10,000 page views</li>
              <li>Basic support</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Sign up
            </button>
          </div>
          <div className="bg-white p-8 rounded shadow m-4 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pro</h3>
            <p className="text-gray-600">$29/month</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Up to 100,000 page views</li>
              <li>Priority support</li>
              <li>Advanced analytics</li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Testimonials</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="bg-gray-200 p-8 rounded shadow m-4 text-center">
            <p className="text-gray-600">
              "SnapStats has been a game changer for my small business. The simple, easy-to-use interface and affordable pricing make it the perfect solution for my needs."
            </p>
            <p className="text-gray-600 text-xl font-bold mt-4">- John Doe, Founder</p>
          </div>
          <div className="bg-gray-200 p-8 rounded shadow m-4 text-center">
            <p className="text-gray-600">
              "I've tried a lot of different web analytics tools, and SnapStats is by far my favorite. It's simple, yet powerful, and the support team is always available to help."
            </p>
            <p className="text-gray-600 text-xl font-bold mt-4">- Jane Smith, Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Faq = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">FAQ</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="bg-gray-200 p-8 rounded shadow m-4 text-center">
            <p className="flex items-center">
              <FaQuestionCircle className="text-gray-600 mr-2" />
              <span className="text-gray-600">How does SnapStats work?</span>
            </p>
            <p className="text-gray-600">
              SnapStats is a simple web analytics tool that tracks page views and unique visitors. It's easy to set up and use, and the affordable pricing makes it a great choice for indie developers and startup founders.
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded shadow m-4 text-center">
            <p className="flex items-center">
              <FaQuestionCircle className="text-gray-600 mr-2" />
              <span className="text-gray-600">What makes SnapStats different from other web analytics tools?</span>
            </p>
            <p className="text-gray-600">
              SnapStats is designed to be lightweight and easy to use, with a focus on basic page view and visitor stats. It's the perfect solution for indie developers and startup founders who don't need all the bells and whistles of more complex analytics tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Cta = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Ready to get started?</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign up for early access
        </button>
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
      <Faq />
      <Cta />
    </div>
  );
};

export default LandingPage;