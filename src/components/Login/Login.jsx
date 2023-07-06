import React from "react";
import Icon from "../Icon/Icon";
import Router from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    Router.push("/");
  };

  if (session) Router.push("/dashboard");

  return (
    <div className="h-screen w-screen bg-customGray">
      <div className=" flex h-full w-screen flex-col justify-center md:flex-row">
        {/* Left Side */}
        <div className="fixed top-0 w-full items-center justify-center bg-black md:static md:flex md:w-2/5">
          <h1 className="md:0 px-6 py-3 font-montserrat text-2xl font-bold text-white md:text-7xl">
            Board.
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex w-full items-center justify-center md:w-3/5">
          <div className="flex flex-col p-5">
            <h2 className="font-montserrat text-4xl font-bold">Sign In</h2>
            <p className="mt-2 font-lato">Sign in to your account</p>

            {/* Buttons */}
            <div className="my-6 flex w-full flex-1 flex-wrap gap-6 md:w-auto">
              <button
                className="flex w-full items-center gap-x-2.5 rounded-[10px] bg-white px-6 py-3 transition-[box-shadow] hover:shadow-md md:w-auto md:px-5 md:py-2"
                onClick={signIn}
              >
                <Icon name={"google"} size={"14px"} />
                <iv className="w-full text-center font-montserrat text-xs text-[#858585] ">
                  Sign in with Google
                </iv>
              </button>
              <button className="flex w-full items-center gap-x-2.5 rounded-[10px] bg-white px-6 py-3 transition-[box-shadow] hover:shadow-md md:w-auto md:px-5 md:py-2">
                <Icon name={"apple"} size={"14px"} />
                <div className="w-full text-center font-montserrat text-xs text-[#858585]">
                  Sign in with Apple
                </div>
              </button>
            </div>

            {/* Login Card */}
            <div className="flex flex-col rounded-2xl bg-white p-4 shadow-md md:p-7">
              <form
                action=""
                className="flex flex-col gap-y-5 "
                onSubmit={onSubmitHandler}
              >
                <div className="flex flex-col gap-y-2.5 ">
                  <label htmlFor="email" className="font-lato">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="eamil"
                    className="rounded-[10px] bg-customGray py-2 pl-4 font-lato transition-[background] focus:bg-customGray focus:outline-0"
                  />
                </div>
                <div className="flex flex-col gap-y-2.5 ">
                  <label htmlFor="password" className="font-lato">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="rounded-[10px] bg-customGray py-2 pl-4 font-lato focus:bg-customGray focus:outline-0 focus:transition-[background]"
                  />
                </div>
                <div className="font-lato text-[#346BD5] ">
                  Forgot password?
                </div>
                <button
                  type="submit"
                  className="w-full rounded-[10px] bg-black py-2.5 font-montserrat text-sm font-bold text-white"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
