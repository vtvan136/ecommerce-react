import React from "react";
import data from "../Data";
import Filter from "./Filter";
import Item from "./Item";
const Product = () => {
  return (
    <>
      <div className="pt-[150px] w-full h-full">
        <h2 className="text-center font-bold text-4xl underline decoration-amber-500">
          Product
        </h2>
        <div className="py-[120px] grid grid-cols-12 w-[90%] gap-4 mx-auto">
          <Filter/>
          <div className="col-span-10 md:col-span-9 col-start-2 mx-auto">
            <div className="grid grid-cols-12 gap-4">
              {data.map((item, id) => (
                <Item key={id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-amber-500  border-solid border-[1px]" />
    </>
  );
};

export default Product;
