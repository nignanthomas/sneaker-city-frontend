import React, { useEffect, useState } from 'react';
import Drift from "react-driftjs";
import { isAuthenticated } from '../helpers/user';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({ title, description, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(isAuthenticated());
  }, [])

  return (
    <>
      <Navigation />

      {title && (<header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </header>)}

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-5">
        {children}
      </div>

      <Drift
        appId="xxg57tt28myv"
        userId={user && user.user.id}
        attributes={{ email: user && user.user.email }}
      />

      <Footer />
    </>
  );
};

export default Layout;
