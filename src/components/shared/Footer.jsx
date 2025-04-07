import React from "react";
import { footerLogo } from "../../assets";

export default function Footer() {
  return (
    <div className="grid lg:grid-cols-5 p-4 md:p-8 gap-2 bg-white dark:bg-black text-black dark:text-white">
      <div className="flex items-center">
        <img src={footerLogo} alt="" />
      </div>
      <div className="flex flex-col gap-1 md:gap-4">
        <span className="font-semibold">Services</span>
        <ul className="flex flex-col gap-1 text-black/80 text-sm">
          <li>Clothing</li>
          <li>Sales</li>
          <li>E-commerce</li>
        </ul>
      </div>
      <div className="flex flex-col gap-1 md:gap-4">
        <span className="font-semibold">Partners</span>
        <ul className="flex flex-col gap-1 text-black/80 text-sm">
          <li>Companies</li>
          <li>Agencies</li>
        </ul>
      </div>
      <div className="flex flex-col gap-1 md:gap-4">
        <span className="font-semibold">Contact Us</span>
        <div className="flex flex-col gap-1 text-black/80 text-sm">
          <span>
            Mobile No: <a href="tel:+2341234567890">+234-124-456-7890</a>
          </span>
          <span>
            Email Address: <a href="mail:janedo@gmail.com">janedo@gmail.com</a>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1 md:gap-4">
        <span className="font-semibold">Social</span>
        <span className="text-sm">social icons</span>
      </div>
    </div>
  );
}
