import React from "react";

const Filter = () => {
  return (
    <>
      <div className="col-span-12 md:col-span-3 mx-auto">
        <div className="">
          <div className="border-b border-[#dddddd] pb-[30px] mb-[25px]">
            <h2 className="text-[18px] font-medium">Categories</h2>
            <div className="flex flex-col items-start pt-[20px]">
              <button className="transition-all capitalize mb-[10px]">
                accessory
              </button>
              <button className="transition-all capitalize mb-[10px]">
                decoration
              </button>
              <button className="transition-all capitalize mb-[10px]">
                furniture
              </button>
            </div>
          </div>
          <div className="border-b border-[#dddddd] pb-[30px] mb-[25px]">
            <h2 className="text-[18px] font-medium">Availability</h2>
            <div className="flex flex-col items-start pt-[20px]">
              <div>
                <input
                  className="mr-5 mb-3"
                  type="checkbox"
                  name="instock"
                  id="instock"
                />
                <label htmlFor="instock">In stock</label>
              </div>
              <div>
                <input
                  className="mr-5 mb-3"
                  type="checkbox"
                  name="instock"
                  id="instock"
                />
                <label htmlFor="instock">Out of stock</label>
              </div>
            </div>
          </div>
          <div className="border-b border-[#dddddd] pb-[30px] mb-[25px]">
            <h2 className="text-[18px] font-medium">Size</h2>
            <div className="flex flex-col items-start pt-[20px]">
              <div>
                <input
                  className="mr-5 mb-3"
                  type="checkbox"
                  name="instock"
                  id="instock"
                />
                <label htmlFor="instock">Large</label>
              </div>
              <div>
                <input
                  className="mr-5 mb-3"
                  type="checkbox"
                  name="instock"
                  id="instock"
                />
                <label htmlFor="instock">Medium</label>
              </div>
              <div>
                <input
                  className="mr-5 mb-3"
                  type="checkbox"
                  name="instock"
                  id="instock"
                />
                <label htmlFor="instock">Small</label>
              </div>
            </div>
          </div>
          <div className="border-b border-[#dddddd] pb-[30px] mb-[25px]">
            <h2 className="text-[18px] font-medium">Color</h2>
            <div className=" pt-[20px] ">
              <ul className="flex justify-between">
                <li className="">
                  <span className="p-3 rounded-full bg-black"></span>
                </li>
                <li className="">
                  <span className="p-3 rounded-full bg-green-300"></span>
                </li>
                <li className="">
                  <span className="p-3 rounded-full bg-gray-300"></span>
                </li>
                <li className="">
                  <span className="p-3 rounded-full bg-pink-300"></span>
                </li>
                <li className="">
                  <span className="p-3 rounded-full  bg-yellow-300"></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-b border-[#dddddd] pb-[30px] mb-[25px]">
            <h2 className="text-[18px] font-medium">Tags</h2>
            <div>
              <span className="hover:text-amber-400 mr-1">Accessories, </span>
              <span className="hover:text-amber-400 mr-1">Chair,</span>
              <span className="hover:text-amber-400 mr-1">Glass,</span>
              <span className="hover:text-amber-400 mr-1">Deco,</span>
              <span className="hover:text-amber-400 mr-1">Table</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
