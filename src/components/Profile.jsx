import React from "react";
import { GrGallery } from "react-icons/gr";
import { IoIosContacts } from "react-icons/io";
import ProfileForm from "./ProfileForm";

export default function Profile() {
  return (
  <div className="w-full h-screen overflow-y-auto pb-24">
      <div className="flex w-full min-h-screen flex-col md:flex-row gap-4 overflow-y-auto">
      {/* Left Panel */}
      <div className="flex flex-col space-y-4">
        {/* Profile Details */}
        <div className="bg-white px-4 rounded-lg pt-3 md:h-[22rem] w-full md:w-[25rem] shadow-xl border-x-4 border-indigo-600">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg text-blue-400 font-medium">Profile</h3>
            <div className="flex justify-center">
              <img
                src="images/image2.jpg"
                alt="profile"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <div className="flex justify-center capitalize flex-1 text-center items-center flex-col">
              <h3 className="font-medium text-gray-400 text-md">
                sonu kumar
              </h3>
              <p className="text-gray-400 font-medium py-1">
                software developer alds
              </p>
              <div className="flex gap-12 py-2">
                <div className="flex justify-center items-center gap-1">
                  <IoIosContacts className="text-lg text-gray-400" />
                  <span className="text-blue-500 font-medium text-lg">254</span>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <GrGallery className="text-md text-gray-400" />
                  <span className="text-blue-500 font-medium text-lg">54</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Notification */}
        <div className="bg-white px-4 rounded-lg pt-3 md:h-[9rem] w-full md:w-[25rem] border-x-4 border-indigo-600">
          <div className="">
            <h3 className="capitalize text-blue-400 font-medium text-lg">
              Notification
            </h3>
            <p className="text-sm font-normal text-gray-400 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quas a sed sit? Fugit magni commodi praesentium quibusdam labore
              aut.
            </p>
          </div>
        </div>
      </div>
      {/* Right Panel */}
      <div className="bg-white px-4 rounded-lg pt-3 pb-4 border-x-4 border-indigo-600 md:h-[32rem] w-full md:w-[] overflow-y-auto">
        <ProfileForm />
      </div>
    </div>
  </div>
  );
}
