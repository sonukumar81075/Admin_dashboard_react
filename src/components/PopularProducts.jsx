import React, { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const populerproduct = [
  {
    id: 1,
    productName: "Smartwatch",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$99.99",
    productStock: 150,
  },
  {
    id: 2,
    productName: "Wireless Headphones",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$49.99",
    productStock: 0,
  },
  {
    id: 3,
    productName: "Bluetooth Speaker",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$79.99",
    productStock: 100,
  },
  {
    id: 4,
    productName: "Laptop",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$899.99",
    productStock: 0,
  },
  {
    id: 5,
    productName: "Laptop",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$899.99",
    productStock: 23,
  },
  {
    id: 6,
    productName: "Laptop",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$899.99",
    productStock: 0,
  },
  {
    id: 7,
    productName: "Laptop",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$899.99",
    productStock: 23,
  },
  {
    id: 8,
    productName: "Laptop",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$899.99",
    productStock: 0,
  },
  {
    id: 9,
    productName: "Laptop",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$899.99",
    productStock: 560,
  },
  {
    id: 10,
    productName: "Laptop",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$899.99",
    productStock: 50,
  },
  {
    id: 11,
    productName: "Laptop",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$899.99",
    productStock: 0,
  },
  {
    id: 12,
    productName: "Laptop",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$899.99",
    productStock: 10,
  },
  {
    id: 13,
    productName: "Laptop",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$899.99",
    productStock: 0,
  },
  {
    id: 14,
    productName: "Laptop",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$899.99",
    productStock: 0,
  },
  {
    id: 15,
    productName: "Laptop",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$899.99",
    productStock: 20,
  },
  {
    id: 16,
    productName: "Laptop",
    icon: <IoIosStarOutline />,
    productImage: "images/image2.jpg",
    productPrice: "$899.99",
    productStock: 0,
  },
];

export default function PopularProducts() {
  const pathname = window.location.pathname;

  let productsToDisplay = populerproduct;

  if (pathname === "/") {
    productsToDisplay = populerproduct.slice(0, 6);
  }
  return (
    <div className={`bg-white px-4 rounded-sm pt-3 order-1 md:order-2 pb-4 border border-gray-200 w-[20.5rem] ${pathname === '/' ? 'md:w-[18.2rem]':'md:w-auto'}`}>
      <strong className="text-gray-700 font-medium">PopularProducts</strong>
      <div className="mt-4 flex flex-col gap-3">
      {productsToDisplay.map((product) => (
          <Link
            to={`/product/${product.id}`}
            className="flex hover:no-underline"
          >
            <div className="w-10 h-10 rounded-full min-w-10 bg-gray-200 overflow-hidden">
              <img
                src={product.productImage}
                alt={product.productName}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800">{product.productName}</p>
              <span
                className={`text-sm font-medium   ${
                  product.productStock === 0
                    ? "text-orange-500"
                    : "text-green-500"
                } `}
              >
                {product.productStock === 0
                  ? "Out of Stock"
                  : product.productStock + "in stock"}
              </span>
            </div>
            <div className="px-[0.6rem]">{product.icon}</div>
            <div className="text-sm text-gray-400">{product.productPrice}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
