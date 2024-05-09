import React from "react";
const helpSupportData = [
  {
    id: 1,
    title: "How to use our service?",
    description:
      "Frequently asked questions about our service. Natus incidunt hic non suscipit, odit cumepeecati dolor ipsam quioptio nisi corrupti deserunt!",
  },
  {
    id: 2,
    title: "Contact us for assistance",
    description:
      "Read our terms and conditions before using our service  sapiente in recusandae rerum reprehenderit voluptatibus  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "FAQs",
    description:
      "Frequently asked questions about our service. Natus incidunt hic non suscipit, odit cumepeecati dolor ipsam quioptio nisi corrupti deserunt!",
  },
  {
    id: 4,
    title: "Terms and Conditions",
    description:
      "Read our terms and conditions before using our service  sapiente in recusandae rerum reprehenderit voluptatibus  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    title: "FAQs",
    description:
      "Frequently asked questions about our service. Natus incidunt hic non suscipit, odit cumepeecati dolor ipsam quioptio nisi corrupti deserunt!",
  },
  {
    id: 6,
    title: "Terms and Conditions",
    description:
      "Read our terms and conditions before using our service  sapiente in recusandae rerum reprehenderit voluptatibus  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
export default function HelpSupport() {
  return (
    <div className="w-full h-screen overflow-y-auto pb-24">
      <div className="bg-white p-4 rounded-md shadow-md ">
        <h2 className="text-xl font-semibold mb-4">Help & Support</h2>
        <div className="flex flex-col space-y-4">
          {helpSupportData.map((item) => (
            <div key={item.id} className="border-b pb-2">
              <h3 className="font-semibold">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
