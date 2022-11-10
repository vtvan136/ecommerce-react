import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { UserAuth } from "../store/AuthContext";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(true);
  const {  logIn, signUp } = UserAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    logIn(email, password);
    navigate("/ecommerce-react");
  };
  const handleSignup = async (e) => {
     
    e.preventDefault()
    try{
      await signUp(email, password);
      setDoc(doc(db, "users", email), {
      wishList: [],
      cartList: [],
    });
      navigate("/ecommerce-react");
    }catch(error){
      alert(error)
    }
  };
  return (
    <>
      <div className="py-[155px] h-full w-full ">
        <div className="px-[15px] mx-auto ">
          <ul className="flex justify-center gap-5">
            <li
              onClick={() => setAuth(true)}
              className={`mr-[45px] font-bold text-2xl ${auth ?('text-black'):('text-gray-600')}`}
            >
              Login
            </li>
            <li
              onClick={() => setAuth(false)}
              className={`mr-[45px] font-bold text-2xl ${!auth ?('text-black'):('text-gray-600')}`}
            >
              Our Register
            </li>
          </ul>
          {!auth ? (
            <div className="w-[400px] px-[15px] mx-auto">
              <h2 className="text-left mt-5">Sign up your account</h2>
              <form
                onSubmit={handleSignup}
                className="flex flex-col gap-y-7 mt-7"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-5 py-2 rounded-3xl text-lg border-2"
                  placeholder="Email"
                  type="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-5 py-2 rounded-3xl text-lg border-2 "
                  placeholder="Password"
                  type="password"
                />
                <button className="px-5 py-2 rounded-3xl text-lg bg-black text-white">
                  Sign up
                </button>
              </form>
            </div>
          ) : (
            <div className="w-[400px] px-[15px] mx-auto">
              <h2 className="text-left mt-5">Login your account</h2>
              <form
                onSubmit={handleLogin}
                className="flex flex-col gap-y-7 mt-7"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-5 py-2 rounded-3xl text-lg border-2"
                  placeholder="Email"
                  type="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-5 py-2 rounded-3xl text-lg border-2 "
                  placeholder="Password"
                  type="password"
                />
                <button className="px-5 py-2 rounded-3xl text-lg bg-black text-white">
                  Login
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
