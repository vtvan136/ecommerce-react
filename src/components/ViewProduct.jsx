import React from "react";
import {
  IoAdd,
  IoHeartOutline,
  IoRemove,
  IoCloseOutline,
} from "react-icons/io5";
import { UserAuth } from "../store/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import Context from "../store/Context";
import { useContext } from "react";
import data from "../Data";
import { db } from "../firebase";
import { useState } from "react";
const ViewProduct = () => {
  const [state] = useContext(Context);
  const Item = data.find((product) => product.id === state.item[0]);
  const { user } = UserAuth();
  const itemID = doc(db, "users", `${user?.email}`);
  const [quantity, setQuantity] = useState(1);
  const closeProduct = () => {
    setQuantity(1);
    const product = document.getElementById("product");
    product.style.display = "none";
  };
  return (
    <>
      <div
        id="product"
        className="bg-black/50 fixed z-[200]  w-full top-0 left-0 justify-center items-center m-auto pt-[90px] h-full hidden"
      >
        {" "}
        {state.item.length === 0 ? (
          <div></div>
        ) : (
          <div className="bg-white relative grid grid-cols-12 rounded-xl gap-10 ">
            <img src={`${Item.url}585x585.jpg`} className='col-span-12 md:col-span-6 my-auto w-full' alt="" />
            <div className="my-auto col-span-12 md:col-span-6 w-full p-5">
              <h2 className="text-lg md:text-2xl font-semibold pb-5 mx-4">{Item.title}</h2>
              <h2 className="text-3xl font-semibold text-gray-400 mx-4">
                ${Item.price}.00
              </h2>
              <h3 className="font-bold text-base pt-8 pb-5 mx-4">
                Available:{" "}
                <span className="text-green-600 font-bold ">in-stock</span>
              </h3>
              <p className="mx-4">
                At vero accusamus et iusto odio dignissimos blanditiis
                praesentiums dolores molest.
              </p>
              <div className="flex gap-5 pt-6 mx-4">
                <div className="border-2 py-2 px-4 border-gray-500 border-solid rounded-3xl">
                  <button
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity(quantity - 1);
                      }
                    }}
                    className=""
                  >
                    <IoRemove size={18} />
                  </button>
                  <span className="items-center outline-0 px-3 w-20 box">
                    {quantity}
                  </span>
                  <button
                    onClick={() => {
                      if (quantity >= 1) {
                        setQuantity(quantity + 1);
                      }
                    }}
                    className=""
                  >
                    <IoAdd size={18} />
                  </button>
                </div>
                <button
                  onClick={() => {
                    if (user?.email) {
                      updateDoc(itemID, {
                        cartList: arrayUnion({
                          id: Item.id,
                          title: Item.title,
                          price: Item.price,
                          url: Item.url,
                          quantity: quantity,
                          id_cart: Date.now(),
                        }),
                      });
                      closeProduct()
                    } else {
                      alert("You need to login");
                    }
                  }}
                  className="bg-black text-white px-8 py-2 rounded-3xl"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => {
                    if (user?.email) {
                      updateDoc(itemID, {
                        wishList: arrayUnion({
                          id: Item.id,
                          title: Item.title,
                          price: Item.price,
                          url: Item.url,
                        }),
                      });
                    } else {
                      alert("You need to login");
                    }
                  }}
                  className="py-2 px-3 border-2 rounded-3xl hover:text-amber-500"
                >
                  <IoHeartOutline className="" size={20} />
                </button>
              </div>
              <h3 className="font-semibold text-base pt-8 mx-4">
                SKU:{" "}
                <span className="text-base font-semibold text-gray-500">
                  {Item.sku}
                </span>
              </h3>
              <h3 className="font-semibold text-base pt-4 mx-4">
                Categories:{" "}
                <span className="text-base font-semibold text-gray-500">
                  {Item.category}
                </span>
              </h3>
              <h3 className="font-semibold text-base pt-4 mx-4">
                Tags:{" "}
                <span className="text-base font-semibold text-gray-500">
                  {Item.tag}
                </span>
              </h3>
              <button
                onClick={closeProduct}
                className="absolute top-0 right-0 px-5 py-5 m-5 hover:text-yellow-500"
              >
                <IoCloseOutline size={30} />{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewProduct;
