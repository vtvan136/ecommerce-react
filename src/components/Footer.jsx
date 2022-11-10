import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full py-5 my-20">

            <div className="grid grid-cols-12 mx-auto w-[90%] gap-6">
              <div className="md:col-span-3 col-span-12">
                <h2 className="text-xl font-medium pb-3">Address</h2>
                <ul>
                  <li className="font-normal text-base hover:text-amber-500">
                    Helendo, Chicago, USA 2022
                  </li>
                  <li className="font-normal text-base hover:text-amber-500">
                    +846677028028
                  </li>
                </ul>
              </div>
              <div className="md:col-span-3 col-span-12">
                <h2 className="text-xl font-medium pb-3">Help & Information</h2>
                <ul>
                  <li className="font-normal text-base hover:text-amber-500">
                    Help & Contact Us
                  </li>
                  <li className="font-normal text-base hover:text-amber-500">
                    Returns & Refunds
                  </li>
                  <li className="font-normal text-base hover:text-amber-500">
                    Online Stores
                  </li>
                  <li className="font-normal text-base hover:text-amber-500">
                    Terms & Conditions
                  </li>
                </ul>
              </div>
              <div className="md:col-span-3 col-span-12">
                <h2 className="text-xl font-medium pb-3">About Us</h2>
                <ul>
                  <li className="font-normal text-base hover:text-amber-500">
                    About us
                  </li>
                  <li className="font-normal text-base hover:text-amber-500">
                    What We Do
                  </li>
                  <li className="font-normal text-base hover:text-amber-500">
                    FAQ Page
                  </li>
                  <li className="font-normal text-base hover:text-amber-500">
                    Contact Us
                  </li>
                </ul>
              </div>
              <div className="md:col-span-3 col-span-12">
                <h2 className="text-xl font-medium pb-3">Newsleter</h2>
                <input
                  className=" border-solid border-2 w-full px-6 py-1 rounded-2xl"
                  type="text"
                  placeholder="You email address"
                />
              </div>
            </div>
      </footer>
    </>
  );
};

export default Footer;
