import React from "react";
import { HiArrowRight } from "react-icons/hi";
const Featured = ({ product, url, order, price }) => {
  return (
    <>
      <div className="w-full h-full">
        <div className=" w-[80%] mx-auto mt-[135px] grid grid-cols-12 gap-4">
          <img
            className={` md:col-span-6 col-span-12 ${order}`}
            src={url}
            alt=""
          />
          <div className=" md:col-span-6 col-span-12">
            <h3 className="text-xs font-medium text-gray-400 pb-[5px]">
              FEATURED PRODUCT
            </h3>
            <div className="text-3xl font-semibold hover:text-amber-400 pb-[5px] mb-[30px] ">
              <a className="border-b-amber-500 border-b-4 pb-2 " href="/">
                {product}
              </a>
            </div>
            <p className="">
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen book. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia.
            </p>
            <button className=" mt-[60px] font-semibold border py-[8px] text-[15px] px-6 border-black inline-flex items-center hover:text-white hover:bg-black rounded-3xl">
              Only ${price}
              <HiArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
