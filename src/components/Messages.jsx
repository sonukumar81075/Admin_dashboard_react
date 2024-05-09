import React from "react";
import MessageCard from "./helper/MessageCard";

const MessageComponent = () => {
  const messsagedata = [
    {
      sender: "John Doe",
      image: "images/image2.jpg",
      text: "Hello there!.....",
      timestamp: "2 hours ago",
      time: "12:00 am",
    },
    {
      sender: "John Doe",
      image: "images/image2.jpg",
      text: "Hello there!.....",
      timestamp: "2 hours ago",
      time: "12:00 am",
    },
    {
      sender: "John Doe",
      image: "images/image2.jpg",
      text: "Hello there!.....",
      timestamp: "2 hours ago",
      time: "12:00 am",
    },
    {
      sender: "John Doe",
      image: "images/image2.jpg",
      text: "Hello there!.....",
      timestamp: "2 hours ago",
      time: "12:00 am",
    },
    {
      sender: "John Doe",
      image: "images/image2.jpg",
      text: "Hello there!.....",
      timestamp: "2 hours ago",
      time: "12:00 am",
    },
    {
      sender: "John Doe",
      image: "images/image2.jpg",
      text: "Hello there!.....",
      timestamp: "2 hours ago",
      time: "12:00 am",
    },
    {
      sender: "John Doe",
      image: "images/image2.jpg",
      text: "Hello there!.....",
      timestamp: "2 hours ago",
      time: "12:00 am",
    },
    {
      sender: "John Doe",
      image: "images/image2.jpg",
      text: "Hello there!.....",
      timestamp: "2 hours ago",
      time: "12:00 am",
    },
    {
      sender: "John Doe",
      image: "images/image2.jpg",
      text: "Hello there!.....",
      timestamp: "2 hours ago",
      time: "12:00 am",
    },
    {
      sender: "John Doe",
      image: "images/image2.jpg",
      text: "Hello there!.....",
      timestamp: "2 hours ago",
      time: "12:00 am",
    },
    {
      sender: "John Doe",
      image: "images/image2.jpg",
      text: "Hello there!.....",
      timestamp: "2 hours ago",
      time: "12:00 am",
    },
  ];
  return (
    <div className="w-full h-screen overflow-y-auto pb-24 bg-white rounded-md">
      <div className="text-2xl text-indigo-600 py-2 p-4">Message</div>

      <div className="flex flex-1 flex-col  items-center">
        {messsagedata.map((data, i) => (
          <MessageCard
            sender={data.sender}
            image={data.image}
            text={data.text}
            timestamp={data.timestamp}
            time={data.time}
            className={`${i % 2 == 0 ? "bg-white" : "bg-gray-200   md:ml-32"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageComponent;
