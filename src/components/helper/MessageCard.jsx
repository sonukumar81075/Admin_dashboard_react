import React from "react";
export default function MessageCard({
  image,
  sender,
  text,
  timestamp,
  className,
  time,
}) {
  return (
    <div
      className={`rounded-lg shadow-md my-2 md:w-[550px] w-full hover:shadow-2xl transition-all duration-300 ease-in-out ${className}`}
    >
      
      <div className="flex items-center px-4 py-3 ">
        <img
          src={image}
          alt="Message Image"
          className="h-10 w-10 rounded-full object-cover mr-2"
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <p className="text-sm font-semibold text-gray-800">{sender}</p>
              <p className="text-sm text-gray-600">{timestamp}</p>
            </div>
            {time && <p className="text-sm text-gray-600">{time}</p>}
          </div>
          <p className="text-sm text-gray-700">{text}</p>
        </div>
      </div>
    </div>
  );
}
