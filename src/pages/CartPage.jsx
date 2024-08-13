import React from "react";
import image from "../assets/c6.jpg";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const trendingSearches = [
    "Java programming",
    "Machine learning basics",
    "Python tutorials",
  ];
  const categories = [
    "Programming",
    "Web Development",
    "Data Science",
    "Design",
    "Design",
    "Web Development",
    "Programming",
    "Data Science",
  ];
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <main className="container mx-auto mt-8 px-4">
        <section className="my-8 hidden md:block">
          <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
        </section>

        <section className="mb-8">
          <div className="grid grid-cols-1 order-1 sm:order-1  md:grid-cols-6 ">
            <div className="col-span-4">
              <div>
                <h2 className="text-lg font-bold mb-4">Course in Cart</h2>
              </div>

              <div>
                <div className="grid grid-cols-6 py-3 border-t">
                  <div className="col-span-1">
                    <img
                      src={image}
                      alt="Course Image"
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-4 col-span-3">
                    <h3 className="text-[10px] sm:text-base font-bold">
                      The Complete Android 14 & Kotlin Development Masterclass
                    </h3>
                    <p className="text-[8px] sm:text-xs text-gray-600">
                      By Denis Panjuta and 1 other
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="bg-[#f68b33] text-[8px] sm:text-xs text-white px-2 py-1 rounded text-xs font-semibold">
                        Bestseller
                      </span>
                      <span className="ml-2 font-semibold">4.5</span>
                      <span className="ml-1 text-[8px] sm:text-xs text-gray-600">
                        (15,502 ratings)
                      </span>
                    </div>
                    <div className="flex items-center mt-2 text-[8px] sm:text-xs text-gray-600">
                      <span>66.5 total hours</span>
                      <span className="mx-2">•</span>
                      <span>505 lectures</span>
                      <span className="mx-2">•</span>
                      <span>All Levels</span>
                    </div>
                  </div>

                  <div className="pt-2 col-span-1">
                    <div>
                      <button className="text-[10px] md:text-sm hover:underline">
                        Remove
                      </button>
                    </div>
                    <div>
                      <button className="text-[10px] md:text-sm hover:underline">
                        Save for Later
                      </button>
                    </div>
                    <div>
                      <button className="text-[10px] md:text-sm hover:underline">
                        Move to Wishlist
                      </button>
                    </div>
                  </div>
                  <div className="p-2 col-span-1">
                    <div className="ml-2 font-semibold text-xl text-[10px] sm:text-base">
                      ₹3,099
                    </div>
                    <div className="ml-2 text-gray-400 line-through text-[8px] sm:text-xs">
                      {/* Previous discounted price could be shown here if needed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-span-2 px-6">
              <div>
                <h2 className="text-lg font-bold mb-2">Total:</h2>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  ₹1,647
                </div>
                <div className="text-gray-400 line-through text-[8px] sm:text-xs">
                  ₹9,297
                </div>
                <div className="text-green-500 text-lg font-semibold mb-4">
                  82% off
                </div>
                <button
                  onClick={handleCheckout}
                  className="bg-[#f68b33] text-[8px] sm:text-xs  text-white w-full py-2 rounded-lg text-center font-semibold mb-4 hover:bg-gray-500"
                >
                  Checkout
                </button>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Promotions</h3>
                <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg border mb-4">
                  <span className="text-sm text-[8px] sm:text-xs text-gray-600">
                    24T7MT72224 is applied Udemy coupon
                  </span>
                  <button className="text-gray-500 hover:text-gray-700">
                    ✖
                  </button>
                </div>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Enter Coupon"
                    className="flex-1 p-2 border rounded-l-lg h-10 focus:outline-none focus:ring-2 focus:ring-[#f68b33]"
                  />
                  <button className="bg-[#f68b33] h-10 text-[8px] sm:text-xs  text-white px-4 py-2 rounded-r-lg font-semibold hover:bg-gray-500">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CartPage;
