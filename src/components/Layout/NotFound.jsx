import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const NotFound = () => {
  return (
    <Layout>
      Page Not Found
      <div className="mt-8" />
      <div className="flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-10 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
