import React from 'react';

const PersonalDetails = ({ personalDetails, setPersonalDetails }) => {
  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

  return (
    <div className="mt-10 sm:mt-0 mb-5">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="text-lg font-bold px-4 py-3 bg-gray-200 sm:px-6">
              1. Personal Details
            </div>
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={personalDetails.first_name}
                    onChange={handleDetailsChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={personalDetails.last_name}
                    onChange={handleDetailsChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email_address"
                    id="email_address"
                    autoComplete="email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={personalDetails.email_address}
                    onChange={handleDetailsChange}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <select
                    id="city"
                    name="city"
                    autoComplete="city"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={personalDetails.city}
                    onChange={handleDetailsChange}
                  >
                    <option>Kigali</option>
                    <option>Butare</option>
                    <option>Musanze</option>
                    <option>Gitarama</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                    Street address
                  </label>
                  <input
                    type="text"
                    name="street_address"
                    id="street_address"
                    autoComplete="street-address"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={personalDetails.street_address}
                    onChange={handleDetailsChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetails;
