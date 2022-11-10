import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { UserAuth } from "../store/AuthContext";
import { HiArrowLeft } from "react-icons/hi";
import { doc, updateDoc, onSnapshot, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
const WishList = () => {
  const { user } = UserAuth();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setProduct(doc.data()?.wishList);
    });
  }, [user?.email]);
  return (
    <>
      <div className="h-full w-[90%] mx-auto pt-24 ">
        <h2 className="text-left text-black font-bold text-4xl underline decoration-amber-500">
          / WISH LIST
        </h2>
        {product ? (
          product.map((item, id) => (
            <div
              key={id}
              className="mx-auto  w-full  border-b-2 border-amber-300 grid grid-cols-6 md:grid-cols-12  items-center gap-4 md:gap-10 py-5 my-8"
            >
              <img
                className="col-span-2 rounded-xl"
                src={`${item.url}74x74.jpg`}
                alt=""
              />
              <h2 className="col-span-4  text-lg font-medium">{item.title}</h2>
              <div className="col-span-2  text-lg font-medium text-gray-600">
                ${item.price}.00
              </div>
              <Link className="col-span-3" to={"/cart"}>
                <button className=" text-white bg-black px-10 py-2 rounded-3xl">
                  Buy Now
                </button>
              </Link>
              <button
                onClick={() => {
                  updateDoc(doc(db, "users", `${user?.email}`), {
                    wishList: arrayRemove({
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      url: item.url,
                    }),
                  });
                }}
                className="hover:text-amber-500 col-span-1 py-2 "
              >
                <IoCloseOutline size={25} />
              </button>
            </div>
          ))
        ) : (
          <div></div>
        )}
        <div className="mt-5">
          <Link
            to={"/ecommerce-react"}
            className=" mt-[60px] font-semibold border py-[8px] text-[15px] px-6 border-black inline-flex items-center hover:text-white hover:bg-black rounded-3xl"
          >
            <HiArrowLeft className="ml-2 mr-3" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default WishList;
