import React from 'react';
import { Link } from 'react-router-dom';

const AuthContainer = ({ title, children }) => {
  return (
    <div className="mt-5 bg-gray-100 rounded-lg py-8">
      <div className="container px-4 sm:px-8 lg:px-8 xl:px-20 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="hidden md:block col-span-6 h-full">
            <img
              className="object-cover w-full h-full max-w-2xl rounded-md shadow-2xl"
              src="https://images.pexels.com/photos/48262/pexels-photo-48262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="authentication" />
          </div>

          <div className="col-span-6">
            <h1 className="font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">Sneaker City</h1>
            <hr className="w-12 h-1 bg-indigo-500 rounded-full mt-8" />
            <p className="text-gray-800 text-base leading-relaxed mt-8 font-semibold">{title}</p>
            <div className="mt-8" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthContainer;
