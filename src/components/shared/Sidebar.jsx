import React from "react";
import { FcBullish } from "react-icons/fc";
import { Link } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { Dashboard_Sidebar_Bottom_Link, Dashboard_Sidebar_Link } from "../consts/Navigation";

const Sidebar = () => {
  return (
    <div className="flex-col bg-neutral-900 w-12 md:w-48 p-3 text-white md:block">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish className="font-[24px]" />
        <Link to={'/'} className="text-neutral-100 text-lg md:block hidden">OpenShop</Link>
      </div>
      <div className="md:space-y-24">
        <div className="md:flex-1 py-8 flex flex-col gap-0.5">
          {Dashboard_Sidebar_Link.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className={`flex items-center gap-2 p-2 font-light py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base ${!item.label && "hidden md:flex"}`} // Show only icons on mobile view
            >
              <span>{item.icon}</span>
              <span className="hidden md:inline">{item.label}</span> {/* Show text link on medium and larger screens */}
            </Link>
          ))}
        </div>
        <div className="md:flex-1 py-4 flex flex-col gap-0.5 md:border-t md:border-neutral-700">
          {Dashboard_Sidebar_Bottom_Link.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className={`flex items-center gap-2 p-2 font-light py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base ${!item.label && "hidden md:flex"}`} // Show only icons on mobile view
            >
              <span>{item.icon}</span>
              <span className="hidden md:inline">{item.label}</span> {/* Show text link on medium and larger screens */}
            </Link>
          ))}
          <div
            className={`flex items-center gap-2 p-2 font-light py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-red-400 cursor-pointer`}
          >
            <span>
              <HiOutlineLogout />
            </span>
            <span className="hidden md:inline">Logout</span> {/* Show text link on medium and larger screens */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
