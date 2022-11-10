import React, { useState, useEffect } from "react";
import { IoHeartOutline } from "react-icons/io5";
import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlineMenu,
} from "react-icons/ai";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../store/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [wish, setWish] = useState([]);
  const [cart, setCart] = useState([]);
  const [menu, setMenu] = useState('hidden')
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/ecommerce-react");
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setWish(doc.data()?.wishList);
      setCart(doc.data()?.cartList);
    });
  }, [user?.email]);
  return (
    <>
      <header className="flex items-center bg-white  h-[90px] w-full fixed top-0 z-30 justify-around p-4 border-b-[1px] border-solid border-amber-500 ">
        <Link className="font-medium text-2xl" to={"/ecommerce-react"}>
          Helendo
        </Link>
          <input
            type="search"
            className="outline-0 text-base border-solid border-2 w-[50%] md:w-1/4 rounded-2xl px-3 py-[2px] border-gray-500"
            placeholder="Search..."
          />
        <AiOutlineMenu onClick={()=>{
           setMenu('top-0 w-full h-screen flex flex-col items-center justify-evenly bg-white absolute ')
        }} className="md:hidden" size={26}/>
        <div id='menu' className={`md:flex md:justify-between ${menu}`}>
          <AiOutlineClose onClick={()=>{setMenu('hidden')}} className="block md:hidden top-0 right-0 absolute m-10" size={26}/>
          <div className="px-4">{user?.email}</div>
          {!user?.email ? (
            <Link to={"/auth"}>
              {" "}
              <AiOutlineUser onClick={()=> setMenu('hidden')} className="md:mr-7 hover:text-amber-500 mx-auto" size={26} /> <h1 className="block md:hidden">Sigin or Register</h1>
            </Link>
          ) : (
            <>
            <AiOutlineLogout
              onClick={handleLogout}
              className="mx-auto md:mr-7 hover:text-amber-500"
              size={26}
            /></>
          )}
          
          <div onClick={()=> setMenu('hidden')} className="relative h-9">
            <Link to={"/wish-list"}>
              <IoHeartOutline className="mx-auto md:mr-7 hover:text-amber-500" size={26} /><h1 className="block md:hidden">Wish</h1>
            </Link>
            <div className="bg-amber-500 text-black h-5 w-5 rounded-[50%] box-border items-center flex justify-center text-center absolute left-5 -top-3 text-xs font-medium">
              {wish ? `${wish.length}` : 0}
            </div>
          </div>
          <div  onClick={()=> setMenu('hidden')} className="relative h-9">
            <Link to={"/cart"}>
              <AiOutlineShopping
                className="mx-auto md:mr-7 hover:text-amber-500"
                size={28}
              /> <h1 className="block md:hidden">Cart</h1>
            </Link>
            <div className="bg-amber-500 text-black h-5 w-5 rounded-[50%] box-border flex justify-center items-center text-center absolute left-5 -top-3 text-xs font-medium">
              {cart ? `${cart.length}` : 0}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
