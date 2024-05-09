import React, { useEffect, useState } from "react";
import PopularProducts from "./PopularProducts";

export default function Products() {
 
  return (
    <div className="w-full h-screen overflow-y-auto pb-12">
      <PopularProducts />
    </div>
  );
}
