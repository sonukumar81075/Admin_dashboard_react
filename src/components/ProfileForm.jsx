import React from "react";
import { Link } from "react-router-dom";

export default function ProfileForm() {
  return (
    <div className="flex flex-col px-3 gap-4 ">
      <div className="text-lg text-blue-400 font-medium text-center">
        User Profile
      </div>
      <div className="">
        <label htmlFor="fullname" className="block mb-1 text-gray-400 font-medium">
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          placeholder="Sonu Kumar"
          id="fullname"
          className="border-b focus:outline-none focus:border-blue-500 w-full"
        />
      </div>
      <div className="">
        <label htmlFor="email" className="block mb-1 text-gray-400 font-medium">
          Email
        </label>
        <input
          type="email"
          placeholder="sonusaini81075@gmail.com"
          name="email"
          id="email"
          className="border-b focus:outline-none focus:border-blue-500 w-full"
        />
      </div>
      <div className="">
        <label htmlFor="password" className="block mb-1 text-gray-400 font-medium">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="123456786767"
          id="password"
          className="border-b focus:outline-none focus:border-blue-500 w-full"
        />
      </div>
      <div className="">
        <label htmlFor="number" className="block mb-1 text-gray-400 font-medium">
          Phone No
        </label>
        <input
          type="tel"
          placeholder="0987654321"
          name="number"
          id="number"
          className="border-b focus:outline-none focus:border-blue-500 w-full"
        />
      </div>
      <div className="">
        <label htmlFor="Message" className="block mb-1 text-gray-400 font-medium">
          Message
        </label>
        <textarea
          type="text"
          placeholder="Hi!"
          name="Message"
          id="Message"
          className="border-b focus:outline-none focus:border-blue-500 w-full"
        />
      </div>
      <div className="py-2">
        <Link to={'/'} className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
          <span className="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full px-6 text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">
            Save All
          </span>
        </Link>
      </div>
    </div>
  );
}
