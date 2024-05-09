import React from "react";
import DashboardStatesGrid from "./DashboardStatesGrid";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";
import RecentOrders from "./RecentOrders";
import PopularProducts from "./PopularProducts";

export default function Dashboard() {
  return (
    <div className="w-full h-screen overflow-y-auto pb-6">
      <div className="flex flex-col gap-4 w-full ">
        <DashboardStatesGrid />
        <div className="flex gap-4 md:flex-row flex-col w-full">
          <TransactionChart />
          <BuyerProfileChart />
        </div>
        <div className="flex md:flex-row flex-col gap-4 w-full ">
          <RecentOrders />
          <PopularProducts />
        </div>
      </div>
    </div>
  );
}
