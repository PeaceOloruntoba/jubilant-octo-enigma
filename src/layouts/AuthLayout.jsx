import React from "react";
import { authCheckers, authFooter, logo } from "../assets";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import LightDarkModeToggle from "../components/ui/LightDarkModeToggle";

export default function AuthLayout() {
  const location = useLocation();
  return (
    <div className="w-screen h-screen overflow-hidden flex bg-white dark:bg-black">
      <div className="w-1/3 bg-gradient-to-b from-[#F7B90F] to-[#B30600] h-full p-8">
        <img src={logo} alt="" />
        {location?.pathname === "/auth/signup" && (
          <div className="py-14 flex flex-col text-white dark:text-black">
            <span className="text-xl">Sign up to join Market!N</span>
            <span>
              Sign up is easy, fast and free. Your gateway to smarter
              connections, better insights, and endless opportunities.
            </span>
          </div>
        )}
        {location?.pathname === "/auth/login" && (
          <div className="py-14 flex flex-col text-white dark:text-black">
            <span className="text-xl">Sign in to your Market!N account</span>
            <span>
              Continue to your account to explore your gateway to smarter
              connections, better insights, and endless opportunities.
            </span>
          </div>
        )}
        <img src={authCheckers} alt="" />
      </div>
      <div className="w-2/3">
        <div className="w-full">
          <div className="w-full flex items-center justify-end p-4 gap-3 text-black dark:text-white">
            {location?.pathname === "/auth/signup" && (
              <span>
                Already have an account?{" "}
                <NavLink
                  className={"text-[#B30600] underline cursor-pointer"}
                  to={"/auth/login"}
                >
                  Log In
                </NavLink>
              </span>
            )}
            {location?.pathname === "/auth/login" && (
              <span>
                Don't have an account?{" "}
                <NavLink
                  className={"text-[#B30600] underline cursor-pointer"}
                  to={"/auth/signup"}
                >
                  Sign Up
                </NavLink>
              </span>
            )}
            {location?.pathname === "/auth/verify-otp" && (
              <span>
                Didn't get any code?{" "}
                <NavLink
                  className={"text-[#B30600] underline cursor-pointer"}
                  to={"/auth/signup"}
                >
                  Resend Code
                </NavLink>
              </span>
            )}
            <LightDarkModeToggle />
          </div>
          <div className="w-full h-full">
            <Outlet />
          </div>
          <div className="w-full absolute bottom-0">
            <img src={authFooter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
