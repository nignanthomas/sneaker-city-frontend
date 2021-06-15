import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../helpers/shared';
import { signup } from '../../helpers/users.api';

const Signup = (props) => {
  const [user, setUser] = useState({ city: 'Kigali' });
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const formIsEmpty = () => !!(!user.email || !user.password);

  const signupUser = async () => {
    await signup(user)
      .then(data => {
        setError(null);
        props.history.push('/login');
      })
      .catch(err => setError(err));
  };

  return (
    <div className="mt-10 sm:mt-0 mb-5">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6 rounded">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={user.firstName || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={user.lastName || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <select
                    id="city"
                    name="city"
                    autoComplete="city"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={user.city}
                    onChange={handleChange}
                  >
                    <option>Kigali</option>
                    <option>Butare</option>
                    <option>Musanze</option>
                    <option>Gitarama</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={user.email || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={user.password || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 mt-2 rounded relative" role="alert">
                  <span className="block sm:inline text-sm">Signup Error</span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-1" onClick={() => setError(null)}>
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                  </span>
                </div>
              )}
              <button
                type="button"
                className={classNames(!(formIsEmpty())
                  ? 'bg-indigo-600 hover:bg-indigo-700'
                  : 'bg-indigo-300 cursor-not-allowed',
                  'w-full items-center justify-center px-10 py-3 mt-5 border border-transparent text-base font-medium rounded-md text-white',
                )}
                disabled={formIsEmpty()}
                onClick={() => signupUser()}
              >
                Signup
              </button>
              <div className="text-sm mt-3">
                Already registered?
                <Link className="ml-3 underline text-indigo-700 text-bold" to="/login">Login</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Signup;
