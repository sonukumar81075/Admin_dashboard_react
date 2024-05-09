import React from 'react';

const TransactionComponent = ({ productName, quantity, price, total, date, transactionId,className,status }) => {
  return (
    <div className="bg-white border-x-4 border-indigo-500 shadow-md rounded-lg p-4 mb-4 sm:flex sm:items-center sm:justify-between">
      <div className="mb-2 sm:mb-0 md:flex items-center gap-12 space-y-3 font-medium">
        <p className="font-semibold text-indigo-400">{productName}</p>
        <p className="text-gray-600">Quantity: {quantity}</p>
        <p className="text-gray-600">Date: {date}</p>
        <p className="text-gray-600">Transaction ID: {transactionId}</p>
        <p className={`text-sm capitalize font-bold text-white bg-gray-100 py-1 px-6 rounded-md w-[10rem]   flex justify-center ${className}`}>{status}</p>
      </div>
      <div className="text-right">
        <p className="text-gray-600">Price: ${price.toFixed(2)}</p>
        <p className="font-semibold text-indigo-400">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TransactionComponent;
