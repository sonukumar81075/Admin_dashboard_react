import React, { Fragment } from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-white h-14 px-4 flex md:justify-between gap-12 md:gap-0 items-center border border-gray-200">
      {/* Search bar */}
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="absolute text-gray-400 top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search....."
          className="text-sm focus:outline-none active:outline-none h-8 md:w-[20rem] w-[10rem] border border-gray-300 rounded-sm pl-9"
        />
      </div>

      <div className="flex items-center  mr-2">
        {/* message icon */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex ml-2">
              <div
                className="h-10 w-10 flex justify-center items-center"
                
              >
                  <HiOutlineChatAlt fontSize={24} />
              </div>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none ring-black ">
                <Menu.Item>
                  {({ active }) => (
                    <Link to={'/messages'} className="text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 w-full text-start py-1 capitalize font-normal hover:bg-gray-300">
                      your message
                    </Link>
                  )}
                </Menu.Item>
              
               
            </Menu.Items>
          </Transition>
        </Menu>
        {/* bell icon */}
        <HiOutlineBell fontSize={24} />

        {/* User menu */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex ml-2">
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center mt-2 items-center ml-2"
                style={{ backgroundImage: 'url("images/image2.jpg")' }}
              >
              </div>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none ring-black ">
                <Menu.Item>
                  {({ active }) => (
                    <button onClick={()=> navigate('/profile')} className="text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 w-full text-start py-1 capitalize font-normal hover:bg-gray-300">
                      your profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to={'/setting'}  className="text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 w-full text-start py-1 capitalize font-normal hover:bg-gray-300">
                    setting
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button onClick={()=> navigate('/logout')} className="text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 w-full text-start py-1 capitalize font-normal hover:bg-gray-300">
                    logout
                    </button>
                  )}
                </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
