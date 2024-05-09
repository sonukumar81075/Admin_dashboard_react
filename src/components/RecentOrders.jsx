import React from "react";
const reacentdata = [
  {
    id: 1,
    productId: 101,
    customerId: 201,
    customerName: "John Doe",
    orderDate: "2024-04-20",
    orderTotal: 150,
    currentOrderStatus: "Processing",
    shipmentAddress: "123 Main St, Anytown",
  },
  {
    id: 2,
    productId: 102,
    customerId: 202,
    customerName: "Alice Smith",
    orderDate: "2024-04-19",
    orderTotal: 200,
    currentOrderStatus: "Shipped",
    shipmentAddress: "456 Elm St, Othertown",
  },
  {
    id: 3,
    productId: 103,
    customerId: 203,
    customerName: "Bob Johnson",
    orderDate: "2024-04-18",
    orderTotal: 75,
    currentOrderStatus: "Delivered",
    shipmentAddress: "789 Oak St, Anycity",
  },
    {
      id: 5,
      productId: 105,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 6,
      productId: 106,
      customerId: 2604,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 7,
      productId: 107,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 8,
      productId: 108,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 9,
      productId: 109,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 10,
      productId: 110,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 11,
      productId: 111,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 12,
      productId: 112,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 13,
      productId: 113,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 14,
      productId: 114,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 15,
      productId: 115,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 16,
      productId: 116,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 17,
      productId: 117,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 18,
      productId: 118,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 19,
      productId: 119,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 20,
      productId: 120,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    },
     
    {
      id: 21,
      productId: 121,
      customerId: 204,
      customerName: "Emma Wilson",
      orderDate: "2024-04-17",
      orderTotal: 120,
      currentOrderStatus: "Processing",
      shipmentAddress: "1011 Maple St, Othercity",
    }];

export default function RecentOrders() {
  const pathname = window.location.pathname;
  console.log('object',pathname)
  let ordersToDisplay = reacentdata;

  if (pathname === "/") {
    ordersToDisplay = reacentdata.slice(0, 6);
  }
  
  return (
    <div className={`bg-white px-4 order-2 md:order-1 rounded-sm pt-3 pb-4 border border-gray-200 flex-1 w-[20.5rem] ${pathname==='/' ? 'md:w-[24rem]' : 'md:w-auto'}  overflow-x-auto`}>
      <strong>Recent Orders</strong>
      <div className="mt-3 ">
        <table className="w-full text-gray-700 border-collapse border-x border-gray-200 rounded-lg">
          <thead>
            <tr className="capitalize border-b border-gray-200 bg-slate-100">
              <td className="py-1 px-1">pro_Id</td>
              <td className="py-1 px-1">cus_Id</td>
              <td className="py-1 px-1">customerName</td>
              <td className="py-1 px-1">orderDate</td>
              <td className="py-1 px-1">orderTotal</td>
              <td className="py-1 px-1">cur_Or_Status</td>
              <td className="py-1 px-1">shipmentAddress</td>
            </tr>
          </thead>
          <tbody>
          {ordersToDisplay.map((data,i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-gray-100"
              >
                <td className="py-2 px-2">{data.productId}</td>
                <td className="py-2 px-2">{data.customerId}</td>
                <td className="py-2 px-2">{data.customerName}</td>
                <td className="py-2 px-2">{data.orderDate}</td>
                <td className="py-2 px-2">{data.orderTotal}</td>
                <td className="py-2 px-2">{data.currentOrderStatus}</td>
                <td className="py-2 px-2">{data.shipmentAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
