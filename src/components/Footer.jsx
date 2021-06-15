import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-2/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Store
          </div>
          <Link to="/shop" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Shop
          </Link>
          <Link to="/men" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Men
          </Link>
          <Link to="/women" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Women
          </Link>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Get Help
          </div>
          <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Order Status
          </Link>
          <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Shipping and Delivery
          </Link>
          <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Returns
          </Link>
          <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Payment Options
          </Link>
          <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Contact Us
          </Link>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            About Sneaker City
          </div>
          <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            About
          </Link>
          <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            News
          </Link>
          <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Careers
          </Link>
          <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Mission
          </Link>
        </div>
      </div>

      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
          <div className="mt-2">
            © Copyright 2021. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
