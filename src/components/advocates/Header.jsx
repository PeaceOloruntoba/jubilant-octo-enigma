import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { FiRefreshCcw } from "react-icons/fi";
import { PiMoonLight } from "react-icons/pi";
import { CiExport } from "react-icons/ci";
import { loremLogo } from "../../assets";
import Button from "../shared/Button";

export default function Header() {
  return (
    <div className="w- flex items-center justify-between m-2 p-2 border-b bg-white dark:bg-black">
      <div className="flex items-center gap-2">
        <img src={loremLogo} alt="" />
        <div className="flex flex-col">
          <span className="font-bold text-2xl">AdLorem Ipsum</span>
          <span className="text-lg">Business</span>
        </div>
        <div>
          <span className="text-4xl">
            <RiArrowDownSLine />
          </span>
        </div>
      </div>
      <div>
        <div className="border rounded-lg flex items-center p-2">
          <span className="text-3xl">
            <BiSearch />
          </span>
          <input
            type="text"
            className="text-xl border-none outline-none p-1"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-4 items-center border-r border-gray-200 px-4">
          <Button className="text-4xl" value={<FiRefreshCcw />} />
          <Button
            className="bg-[#F5F3F3] text-2xl p-2 rounded-full"
            value={<PiMoonLight />}
          />
        </div>
        <Button
          value={
            <span className="flex gap-3 text-lg items-center border p-2 rounded-lg shadow hover:bg-gray-100 transition-color duration-500">
              Export{" "}
              <span className="text-3xl">
                <CiExport />
              </span>
            </span>
          }
        />
      </div>
    </div>
  );
}
