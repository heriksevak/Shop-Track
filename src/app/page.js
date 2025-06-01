import Link from 'next/link';

import './globals.css';
import Image from 'next/image';
import Logo from '../Images/Logo2.png'; // Adjust the path if you're inside pages/index.js
import HeroImg from '../Images/HeroImage.jpg';

export default function Home() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
<Image src={Logo} alt="Flowbite Logo" width={100} height={32} className="h-8 w-auto animate-spin" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Track</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* <li><Link href="/" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white">Home</Link></li> */}
              <li><Link href="/contact" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white">Home</Link></li>
              <li><Link href="/about" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white">Features</Link></li>
              <li><Link href="/services" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white">Pricing</Link></li>
              <li><Link href="/pricing" className="block py-2 px-3 text-gray-900 hover:text-blue-700 md:p-0 dark:text-white">About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    <section className="relative overflow-hidden min-h-screen">
      {/* Background span effects (you can replace this with animated circles or dots) */}
      {/* <div className="absolute inset-0 flex flex-wrap gap-1 opacity-10">
        {Array.from({ length: 200 }).map((_, i) => (
          <span
            key={i}
            className="w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 1}s`,
            }}
          ></span>
        ))}
      </div> */}

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-white" id="Home">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10">
          {/* Text Section */}
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <abbr title="Shop Management System" className="no-underline">
                ShopTrack
              </abbr>{" "}
              - Simplifying Shop Management with Real-Time Insights!
            </h2>
            <p className="text-lg text-gray-300">
              ShopTrack is an intuitive platform designed for shop owners and staff to efficiently manage
              inventory, track income and expenses, and generate insightful reports. Built with modern
              technology, it simplifies everyday operations, helping businesses focus on growth and customer
              service.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/register" className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium">
                Register
              </a>
              <a href="/login" className="px-6 py-2 border border-gray-400 hover:bg-gray-700 rounded text-white">
                Login
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3 shadow-lg rounded-3xl overflow-hidden">
          <Image src={HeroImg} alt="Hero" width={100} height={32} className="w-full h-auto object-cover rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.9)]" />
          </div>
        </div>
      </div>
    </section>

      <div className="w-full max-w-7xl mx-auto px-4 py-12" id="Features">
  <div className="flex flex-wrap justify-center gap-6">
    <div className="w-full md:w-[45%] xl:w-[40%] bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
      <h5 className="text-lg font-medium mb-2">Track Inventory in Real-Time</h5>
      <p className="text-gray-300 mb-4">Monitor stock levels, add new products, and receive alerts when items run low to avoid out-of-stock situations.</p>
      <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Learn More</a>
    </div>

    <div className="w-full md:w-[45%] xl:w-[40%] bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-2">Sales Tracking</h3>
      <h5 className="text-lg font-medium mb-2">Comprehensive Sales Overview</h5>
      <p className="text-gray-300 mb-4">Record every sale, including product, quantity, and payment method. Generate performance reports over time.</p>
      <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Learn More</a>
    </div>

    <div className="w-full md:w-[45%] xl:w-[40%] bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-2">Expense Management</h3>
      <h5 className="text-lg font-medium mb-2">Control and Track Expenses</h5>
      <p className="text-gray-300 mb-4">Log daily expenses, categorize them, and track spending trends to maintain a balanced budget and increase profitability.</p>
      <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Learn More</a>
    </div>

    <div className="w-full md:w-[45%] xl:w-[40%] bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-2">Reporting</h3>
      <h5 className="text-lg font-medium mb-2">Generate In-Depth Reports</h5>
      <p className="text-gray-300 mb-4">Create detailed reports on income, expenses, and stock levels to make informed decisions and improve business strategies.</p>
      <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Learn More</a>
    </div>
  </div>
</div>
<div className="w-full max-w-7xl mx-auto px-4 py-16 text-white" id="Pricing">
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between">
      <div>
        <h4 className="text-2xl font-bold mb-2">Starter</h4>
        <div className="text-3xl font-semibold text-blue-400">₹1,299.00</div>
        <div className="text-sm text-green-400 mb-4">Save ₹200.00</div>
        <ul className="space-y-2 text-gray-300 mb-6">
          <li>Track up to 100 Products</li>
          <li>Basic Income & Expense Tracking</li>
          <li>Generate Monthly Reports</li>
          <li className="line-through opacity-60">Multi-User Access</li>
          <li className="line-through opacity-60">Priority Support</li>
        </ul>
      </div>
      <a href="#" className="mt-auto bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded">Select Plan</a>
    </div>

    <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between border border-red-500">
      <div>
        <h4 className="text-2xl font-bold mb-2">Business</h4>
        <div className="text-3xl font-semibold text-red-400">₹2,299.00</div>
        <div className="text-sm text-green-400 mb-4">Save ₹400.00</div>
        <ul className="space-y-2 text-gray-300 mb-6">
          <li>Track up to 500 Products</li>
          <li>Advanced Income & Expense Tracking</li>
          <li>Generate Weekly & Monthly Reports</li>
          <li>Multi-User Access</li>
          <li className="line-through opacity-60">Priority Support</li>
        </ul>
      </div>
      <a href="#" className="mt-auto bg-red-600 hover:bg-red-700 text-white text-center py-2 rounded">Select Plan</a>
    </div>

    <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between border border-green-500">
      <div>
        <h4 className="text-2xl font-bold mb-2">Enterprise</h4>
        <div className="text-3xl font-semibold text-green-400">₹3,499.00</div>
        <div className="text-sm text-green-400 mb-4">Save ₹600.00</div>
        <ul className="space-y-2 text-gray-300 mb-6">
          <li>Unlimited Product Tracking</li>
          <li>Complete Income & Expense Tracking</li>
          <li>Generate Custom Reports</li>
          <li>Multi-User Access with Admin Roles</li>
          <li>Priority Support</li>
        </ul>
      </div>
      <a href="#" className="mt-auto bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded">Select Plan</a>
    </div>

  </div>
</div>

<section className="py-10 mt-10 text-white" id="About">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row md:items-start md:gap-10">
      
      <div className="md:w-5/12">
        <div className="text-gray-400 mb-2">Our Journey</div>
        <h2 className="text-3xl font-bold mb-4">About ShopTrack</h2>
        <p className="text-lg mb-4">ShopTrack was born from the need to simplify shop management for owners everywhere. We aim to revolutionize the way shop owners handle their daily operations.</p>
        <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded">Learn more</a>
      </div>

      <div className="md:w-6/12 md:ml-auto mt-6 md:mt-0">
        <p className="text-lg mb-4">At ShopTrack, we believe that shop management should be effortless. Our platform allows shop owners to monitor inventory, track sales, and manage expenses, all in real-time. By providing these tools in an easy-to-use interface, we empower businesses to operate more efficiently.</p>
        <p className="text-lg">Whether you run a small shop or a growing retail business, ShopTrack gives you the control and insights you need to grow. We are dedicated to helping you achieve success with intuitive features that simplify your workflow.</p>
      </div>

    </div>
  </div>
</section>
<footer className="bg-[#181818] text-white mt-10 border-t border-white pt-10">
  <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

    <div>
      <h5 className="text-xl font-semibold mb-4">SHOPTRACK</h5>
      <ul className="space-y-2">
        <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
        <li><a href="#features" className="hover:text-blue-400">Features</a></li>
        <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </div>

    <div>
      <h5 className="text-xl font-semibold mb-4">Support</h5>
      <ul className="space-y-2">
        <li><a href="#faq" className="hover:text-blue-400">FAQs</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Help Center</a></li>
        <li><a href="#tutorials" className="hover:text-blue-400">Tutorials</a></li>
        <li><a href="#privacy" className="hover:text-blue-400">Privacy Policy</a></li>
      </ul>
    </div>

    <div>
      <h5 className="text-xl font-semibold mb-4">Careers</h5>
      <ul className="space-y-2">
        <li><a href="#careers" className="hover:text-blue-400">Join our team</a></li>
      </ul>
    </div>

    <div>
      <h5 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h5>
      <form className="flex flex-col space-y-3">
        <input type="email" placeholder="Email address" className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Subscribe</button>
      </form>
    </div>

  </div>

  <div className="text-center text-sm text-gray-400 border-t border-white mt-6 py-4">
    © 2024 ShopTrack
  </div>
</footer>


      {/* <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome to ShopTrack</h1>
        <div className="space-x-4">
          <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
          <Link href="/register" className="text-green-600 hover:underline">Register</Link>
        </div>
      </div> */}
    </>
  );
}
