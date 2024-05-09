import React from "react";
import TransactionComponent from "./helper/TransactionComponent ";

export default function Transaction() {
  const transactions = [
    {
      productName: "Product A",
      quantity: 1,
      price: 10.99,
      total: 21.98,
      date: "2024-04-26",
      transactionId: "ABC123",
      status: "reject",
    },
    {
      productName: "Product B",
      quantity: 2,
      price: 24.99,
      total: 24.99,
      date: "2024-04-25",
      transactionId: "DEF456",
      status: "pending",
    },
    {
      productName: "Product C",
      quantity: 3,
      price: 8.99,
      total: 26.97,
      date: "2024-04-24",
      transactionId: "GHI789",
      status: "successful",
    },
    {
      productName: "Product D",
      quantity: 4,
      price: 10.99,
      total: 21.98,
      date: "2024-04-26",
      transactionId: "ABC123",
      status: "reject",
    },
    {
      productName: "Product E",
      quantity: 5,
      price: 24.99,
      total: 24.99,
      date: "2024-04-25",
      transactionId: "DEF456",
      status: "pending",
    },
    {
      productName: "Product F",
      quantity: 6,
      price: 8.99,
      total: 26.97,
      date: "2024-04-24",
      transactionId: "GHI789",
      status: "successful",
    },
    {
      productName: "Product G",
      quantity: 7,
      price: 10.99,
      total: 21.98,
      date: "2024-04-26",
      transactionId: "ABC123",
      status: "reject",
    },
    {
      productName: "Product H",
      quantity: 8,
      price: 24.99,
      total: 24.99,
      date: "2024-04-25",
      transactionId: "DEF456",
      status: "pending",
    },
    {
      productName: "Product I",
      quantity: 9,
      price: 8.99,
      total: 26.97,
      date: "2024-04-24",
      transactionId: "GHI789",
      status: "successful",
    },
    // Add more transactions as needed
  ];
  return (
    <div className="w-full h-screen overflow-y-auto pb-12">
      <div className="container mx-auto px-4 ">
        <h1 className="text-2xl font-semibold mb-4">Transactions</h1>
        <div>
          {transactions.map((transaction, index) => (
            <TransactionComponent
              key={index}
              productName={transaction.productName}
              quantity={transaction.quantity}
              price={transaction.price}
              total={transaction.total}
              date={transaction.date}
              transactionId={transaction.transactionId}
              status={transaction.status}
              className={`${
                transaction.status == "successful" ? "bg-green-400" : ""
              } ${transaction.status == "pending" ? "bg-blue-500" : ""} ${
                transaction.status == "reject" ? "bg-red-400" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
