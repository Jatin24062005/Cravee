import React, { useEffect } from "react";

const Sign = ({ onClose }) => {
 

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="modal-bg absolute top-0 left-0 w-full h-full"></div>
      <section className="bg-white rounded-lg shadow-lg w-4/5 sm:w-2/3 lg:w-1/3 p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 focus:outline-none rounded-full p-2"
        >
          <svg
            className="w-4 h-4 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-center text-black mb-4">Sign up to create account</h2>
        <p className="text-base text-center text-gray-600 mb-6">
          Already have an account?{" "}
          <a href="#" className="font-medium text-black hover:underline">
            Sign In
          </a>
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="text-base font-medium text-gray-900 block">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full h-10 rounded-md border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-base font-medium text-gray-900 block">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="w-full h-10 rounded-md border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-base font-medium text-gray-900 block">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full h-10 rounded-md border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            className="w-full inline-flex items-center justify-center rounded-md bg-black text-white px-3.5 py-2.5 font-semibold leading-7 hover:bg-black/80"
          >
            Create Account
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-rose-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
              </svg>
              Sign up with Google
            </button>
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-[#2563EB] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
              </svg>
              Sign up with Facebook
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Sign;
