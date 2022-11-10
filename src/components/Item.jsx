import React, { useState } from "react";
import { IoAdd, IoHeartOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { viewItem } from "../store/actions";
import Context from "../store/Context";
import { useContext } from "react";
import { UserAuth } from "../store/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const Item = ({ item }) => {
  const [, dispatch] = useContext(Context);
  const [count, setCount] = useState(1);
  const { user } = UserAuth();
  const itemID = doc(db, "users", `${user?.email}`);
  return (
    <>
      <div className="relative col-span-6 md:col-span-4">
        <div className="relative group">
          <img
            className="rounded-lg w-full "
            src={`${item.url}300x300.jpg`}
            alt=""
          />
          <div className="absolute top-0 left-0 hidden bg-black/30 h-full w-full rounded-lg group-hover:block">
            <div className="flex items-center justify-center gap-4 h-full">
              <IoAdd
                onClick={() => {
                  if(user?.email){
                  const product = document.getElementById("product");
                  product.style.display = "flex";
                  dispatch(viewItem(item.id));
                }else{
                  alert('You need to login')
                }}}
                className="rounded-3xl p-2 bg-white hover:text-amber-500"
                size={42}
              />

              <IoHeartOutline
                onClick={() => {
                  setCount(count + 1);
                  if (count === 2) {
                    alert("You can only add one product");
                  }
                  if (user?.email) {
                    updateDoc(itemID, {
                      wishList: arrayUnion({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        url: item.url,
                      }),
                    });
                  } else {
                    alert("You need to login");
                  }
                }}
                className="rounded-3xl hover:text-amber-500  p-2 bg-white"
                size={42}
              />
              <AiOutlineShopping
                onClick={() => {
                  if (user?.email) {
                    updateDoc(itemID, {
                      cartList: arrayUnion({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        url: item.url,
                        quantity: 1,
                        id_cart: Date.now(),
                      }),
                    });
                    //.log(a)
                  } else {
                    alert("You need to login");
                  }
                }}
                className="rounded-3xl hover:text-amber-500 p-2 bg-white"
                size={42}
              />
            </div>
          </div>
        </div>
        <h3 className="text-center text-lg font-medium">{item.title}</h3>
        <h3 className="text-center text-xl text-gray-500">${item.price}.00</h3>
      </div>
    </>
  );
};

export default Item;
