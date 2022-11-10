import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { UserAuth } from "../store/AuthContext";
import { HiArrowLeft } from "react-icons/hi";
import { doc, updateDoc, onSnapshot, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user } = UserAuth();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setProduct(doc.data()?.cartList);
    });
  }, [user?.email]);
  var Total = 0;
  if (product) {
    let sum = 0;
    product.forEach((element) => {
      sum += Number(element.price * element.quantity);
    });
    Total = sum;
  }
  return (
    <>
      <div className="h-full w-[90%] mx-auto pt-24 ">
        <h2 className="text-left text-black font-bold text-4xl underline decoration-amber-500">
          / CART
        </h2>
        {product ? (
          product.map((item, id) => (
            <div
              key={id}
              className="mx-auto  w-full  border-b-2 border-amber-300 grid grid-cols-6 md:grid-cols-12  items-center gap-4 py-5 my-8"
            >
              <h2 className="col-span-2 text-sm md:text-lg  font-medium">
                {item.id_cart}
              </h2>
              <img
                className="col-span-2 rounded-xl"
                src={`${item.url}74x74.jpg`}
                alt=""
              />
              <h2 className="col-span-2 text-lg font-medium text-center">
                {item.title}
              </h2>
              <div className="col-span-2 text-lg font-medium text-gray-600">
                ${item.price}.00
              </div>
              <h2 className="col-span-1 text-lg font-medium">
                {item.quantity}
              </h2>
              <div className="col-span-2 text-lg font-medium text-gray-600">
                ${item.price * item.quantity}.00
              </div>
              <button
                onClick={() => {
                  updateDoc(doc(db, "users", `${user?.email}`), {
                    cartList: arrayRemove({
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      url: item.url,
                      quantity: item.quantity,
                      id_cart: item.id_cart,
                    }),
                  });
                }}
                className="hover:text-amber-500 col-span-1  py-2 "
              >
                <IoCloseOutline size={25} />
              </button>
            </div>
          ))
        ) : (
          <h2 className="text-lg font-medium mt-6 ml-[6%] text-black">
            Your cart is currently empty.
          </h2>
        )}
        <Link
            to={"/ecommerce-react"}
            className=" mt-[60px] font-semibold border py-[8px] text-[15px] px-6 border-black inline-flex items-center hover:text-white hover:bg-black rounded-3xl"
          >
            <HiArrowLeft className="ml-2 mr-3" />
            Continue Shopping
          </Link>
        <div className="grid grid-cols-6 md:grid-cols-12 py-5 my-8">
          <div className="col-span-6 md:col-span-4 col-start-1 md:col-start-9  border-2 rounded-2xl py-8 border-gray-600 px-2 flex flex-row md:flex-col gap-2 md:gap-5">
            <h2 className="text-xl md:text-2xl font-medium mx-auto my-">
              Total: <span className="ml-7"> ${Total}.00</span>
            </h2>
            <button
              onClick={() => {
                if(Total ===0){
                  alert(' Your cart is currently empty.')
      
                }else{
                product.forEach((item) => {
                  updateDoc(doc(db, "users", `${user?.email}`), {
                    cartList: arrayRemove({
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      url: item.url,
                      quantity: item.quantity,
                      id_cart: item.id_cart,
                    }),
                  });
                });
                alert("Payment success");
              }}}
              className="font-semibold border text-[15px] border-black bg-black text-white inline-flex items-center px-4 py-2 hover:text-black hover:bg-white rounded-3xl mx-auto"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
