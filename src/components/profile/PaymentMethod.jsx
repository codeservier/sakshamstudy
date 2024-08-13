import React from "react";

const PaymentMethod = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-8 py-4">
      <div className="grid grid-cols-1">
        <div className=" p-5  border-gray-300">
          <h2 className="text-2xl font-bold">Payment methods</h2>
        </div>
        <div className="bg-gray-100 p-5 mx-5">
          <input type="checkbox" />
          <label className="px-3">
            Show my saved payment methods on the checkout step.{" "}
          </label>
        </div>
        <div className="p-5 ">
          <div>
            <h2 className="text-xl font-bold">Your saved payment methods</h2>
          </div>
          <div
            className="py-10 px-4 md:px-24 text-center mt-6 border-4"
            style={{ borderStyle: "dotted" }}
          >
            You don’t have any saved payment method
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
