import React from "react";
import { IoBagHandle } from "react-icons/io5";

export default function DashboardStatesGrid() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex gap-2 items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $1234.60
            </strong>
            <span className="text-sm text-green-500">+234</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex gap-2 items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $3425.60
            </strong>
            <span className="text-sm text-green-500">+234</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex gap-2 items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $5432.60
            </strong>
            <span className="text-sm text-green-500">+123</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>  
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex gap-2 items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $9876.60
            </strong>
            <span className="text-sm text-green-500">+678</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm flex-1 border-gray-200 flex items-center text-center p-2 w-[20.5rem] md:w-[calc(25%-1rem)]">
      {" "}
      {/* Adjust width for larger screens */}
      {children}
    </div>
  );
}
