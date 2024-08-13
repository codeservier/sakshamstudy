import React, { useState } from "react";
import image from "../../assets/c1.jpg";
const Checkout = () => {
  return (
    <div>
      <div className="grid grid-cols-4 md:grid-cols-8 ">
        <div className="col-span-5">
          <div className="overflow-y-auto px-12 py-9 h-screen">
            <h2 className="text-3xl font-bold mb-4">Checkout</h2>
            <h2 className="text-xl font-bold mb-4">Billing address</h2>

            <div className="grid grid-cols-2 gap-2">
              <div className="mb-6">
                <label
                  className="block text-sm font-medium  "
                  htmlFor="country"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#f68b33] focus:border-[#f68b33] sm:text-sm"
                >
                  <option>India</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium  " htmlFor="state">
                  State / Union Territory{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="state"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#f68b33] focus:border-[#f68b33] sm:text-sm"
                >
                  <option value="">Please select...</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4">Payment method</h2>
            <div className="mb-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="credit-card"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-[#f68b33] focus:ring-[#f68b33] border-gray-300"
                  />
                  <label
                    htmlFor="credit-card"
                    className="ml-3 block text-sm font-medium  "
                  >
                    Credit/Debit Card
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="upi"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-[#f68b33] focus:ring-[#f68b33] border-gray-300"
                  />
                  <label
                    htmlFor="upi"
                    className="ml-3 block text-sm font-medium  "
                  >
                    UPI
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="net-banking"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-[#f68b33] focus:ring-[#f68b33] border-gray-300"
                  />
                  <label
                    htmlFor="net-banking"
                    className="ml-3 block text-sm font-medium  "
                  >
                    Net Banking
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="mobile-wallets"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-[#f68b33] focus:ring-[#f68b33] border-gray-300"
                  />
                  <label
                    htmlFor="mobile-wallets"
                    className="ml-3 block text-sm font-medium  "
                  >
                    Mobile Wallets
                  </label>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-4">Order details</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={image}
                    alt="Course"
                    className="w-16 h-16 rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-base font-bold">
                      The Complete Android 14 & Kotlin Development Masterclass
                    </h3>
                    <p className=" ">₹3,099</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={image}
                    alt="Course"
                    className="w-16 h-16 rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="text-base font-bold">
                      The Complete Android 15 Course - Build 82 Apps [Java &
                      Kotlin]
                    </h3>
                    <p className=" ">₹3,099</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 col-span-5 px-12 md:col-span-3 p-4 overflow-y-auto md:h-screen">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="">
            <div className="flex justify-between mb-4">
              <span className=" ">Original Price:</span>
              <span className="font-medium">₹9,297</span>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between mb-4">
              <span className=" ">Total:</span>
              <span className="font-medium text-xl">₹9,297</span>
            </div>
            <div className="text-sm   mb-4">
              By completing your purchase you agree to these{" "}
              <a href="#" className="text-blue-600">
                Terms of Service
              </a>
              .
            </div>
            <button className="bg-[#f68b33] text-white w-full py-3 rounded-lg font-semibold hover:bg-[#9c4d0b]">
              Complete Checkout
            </button>
            <div className="text-center text-sm text-gray-500 mt-4">
              30-Day Money-Back Guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
