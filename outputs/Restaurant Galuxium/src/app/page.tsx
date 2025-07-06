```tsx
// landingPage.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function LandingPage() {
  return (
    <div className="bg-white">
      <header className="relative">
        {/* Hero section */}
        <div className="h-screen px-4 py-36 sm:py-48 lg:py-56">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Restaurant Galuxium
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-xl text-gray-500 sm:mt-10 sm:text-2xl lg:max-w-3xl">
              The ultimate ecommerce solution for retailers and consumers in the restaurant industry.
            </p>
            <div className="mt-10 sm:mt-16 sm:flex sm:justify-center lg:mt-20">
              <div className="rounded-md shadow">
                <a
                  href="#features"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                >
                  Learn more
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md bg-white px-8 py-3 font-medium text-indigo-600 hover:text-indigo-900 md:py-4 md:px-10 md:text-lg"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background image */}
        <div className="absolute inset-0 -z-10 h-full w-full object-cover" style={{backgroundImage: `url("/hero-background.jpg")`, backgroundPosition: 'center', backgroundSize: 'cover'}} />
      </header>

      {/* Features section */}
      <section id="features" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-900/10 via-gray-900/70 to-gray-900/10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-12">
            <div className="lg:pr-8 lg:pt-4 lg:pl-4 lg:border-r lg:border-gray-700 lg:border-opacity-20">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Powerful features to help you grow
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                officiis quisquam unde voluptatum.
              </p>
              <ul role="list" className="mt-10 space-y-6 text-gray-300">
                <li className="flex gap-x-6">
                  <span className="font-semibold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-none">
                      <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"></path>
                      <circle cx="9.11" cy="9.11" r="3.5"></circle>
                    </svg>
                  </span>
                  <span>
                    Simplified order management
                  </span>
                </li>
                <li className="flex gap-x-6">
                  <span className="font-semibold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-none">
                      <path d="M18 20h-10a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v12z"></path>
                      <path d="M12 6l-6 6 6 6"></path>
                    </svg>
                  </span>
                  <span>
                    Easy inventory tracking
                  </span>
                </li>
                <li className="flex gap-x-6">
                  <span className="font-semibold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-none">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                  <span>
                    Customer analytics
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-16 sm:mt-0">
              <div className="pl-4 -mx-4 sm:pl-6 md:pl-0 lg:pr-8">
                <img className="w-full rounded-lg shadow-lg" src="/features-image.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section id="pricing" className="relative isolate overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-gray-900/10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose the right plan for your business
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              officiis quisquam unde voluptatum.
            </p>
          </div>
          <div className="mt-16 space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="flex flex-col items-center rounded-3xl bg-gray-900/5 p-8 ring-1 ring-gray-900/10 lg:col-start-1 lg:row-start-1 lg:flex-shrink-0">
              <div className="text-center">
                <p className="text-base font-semibold text-gray-600">Starter</p>
                <p className="mt-2 text-5xl font-bold text-white">$29</p>
                <p className="mt-6 text-gray-500">Per month, billed annually</p>
              </div>
              <ul role="list" className="mt-10 space-y-4">
                <li className="flex items-center gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-none text-green-500">
                    <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"></path>
                    <circle cx="9.11" cy="9.11" r="3.5"></circle>
                  </svg>
                  <span>Simplified order management</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-none text-green-500">
                    <path d="M18 20h-10a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v12z"></path>
                    <path d="M12 6l-6 6 6 6"></path>
                  </svg>
                  <span>Easy inventory tracking</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-none text-gray-400 stroke-2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Customer analytics (limited)</span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign up
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-3xl bg-gray-900/5 p-8 ring-1 ring-gray-900/10 lg:col-start-2 lg:row-start-1 lg:flex-shrink-0">
              <div className="text-center">
                <p className="text-base font-semibold text-gray-600">Pro</p>
                <p className="mt-2 text-5xl font-bold text-white">$59</p>
                <p className="mt-6 text-gray-500">Per month, billed annually</p>
              </div>
              <ul role="list" className="mt-10 space-y-4">
                <li className="flex items-center gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-none text-green-500">
                    <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"></path>
                    <circle cx="9.11" cy="9.11" r="3.5"></circle>
                  </svg>
                  <span>Simplified order management</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-none text-green-500">
                    <path d="M18 20h-10a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v12z"></path>
                    <path d="M12 6l-6 6 6 6"></path>
                  </svg>
                  <span>Easy inventory tracking</span>
                 </li>
                <li className="flex items-center gap-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-none text-green-500">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span>Customer analytics</span>
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign up
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-3xl bg-gray-900/5 p-8 ring-1 ring-gray-900/10 lg:col-start-3 lg:row-start-1 lg:flex-shrink-0">
              <div className="text-center">
                <p className="text-base font-semibold text-gray-600">Enterprise</p>
                <p className="mt-2 text-5xl font-bold text-white">$99</p>
                <p className="mt-6 text-gray-500">Per month, billed annually</p>
              </div>
              <ul role="list" className="mt-10 space-y-4">
                <li className="flex items-center gap-x-3">
                  <svg xmlns="http://www.