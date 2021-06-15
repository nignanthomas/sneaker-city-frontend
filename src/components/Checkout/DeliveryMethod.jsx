import React from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';

const plans = [
  {
    name: 'Standard',
    description: 'Delivery with 3 working days',
    price: 2,
  },
  {
    name: 'Express',
    description: 'Delivery the same day',
    price: 5,
  },
];

const DeliveryMethod = ({ setshippingMethod, shippingMethod }) => {
  return (
    <div className="mt-10 sm:mt-0 mb-5">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="text-lg font-bold px-4 py-3 bg-gray-200 sm:px-6">
              2. Shipping Method
            </div>
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="w-full px-4 py-4">
                <div className="w-full max-w-md mx-auto">
                  <RadioGroup value={shippingMethod} onChange={setshippingMethod}>
                    <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                    <div className="space-y-2">
                      {plans.map((plan) => (
                        <RadioGroup.Option
                          key={plan.name}
                          value={plan}
                          className={({ active, checked }) =>
                            `${active
                              ? 'ring-2 ring-offset-2 ring-offset-light-blue-300 ring-white ring-opacity-60'
                              : ''
                            }
                            ${checked
                              ? 'bg-indigo-500 bg-opacity-75 text-white'
                              : 'bg-white'
                            }
                            relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                                    >
                                      {plan.name}
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                      as="span"
                                      className={`inline ${checked ? 'text-light-blue-100' : 'text-gray-500'}`}
                                    >
                                      <span>
                                        {plan.description}
                                      </span>{' '}
                                      <span aria-hidden="true">&middot;</span>{' '}
                                      <span className="font-medium">{`$${plan.price}`}</span>
                                    </RadioGroup.Description>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="flex-shrink-0 text-white">
                                    <CheckIcon className="w-6 h-6" />
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeliveryMethod;
