import React from "react";
import { FaCheckCircle, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";

import { HiOutlineUsers } from "react-icons/hi";

import { RiProductHuntLine } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaShareSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

export default function BrandProfile() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-[#FAFAFA] min-h-screen">
      {/* Left Profile Card */}
      <div className="bg-white shadow rounded-xl p-6 w-full lg:w-[35%]">
        <div className="flex justify-between items-start">
          <div className="text-blue-600 text-6xl font-bold">
            {/* Placeholder Logo */}
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <span className="text-2xl font-bold">L</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium">
              View Campaign
            </button>
            <FaShareSquare className="text-red-600 text-xl cursor-pointer" />
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            Lorem Ipsum <FaCheckCircle className="text-green-500" />
          </h2>
          <p className="text-gray-500 text-sm">@loremipsum</p>
          <p className="mt-2 text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur. Eleifend ultrices tristique
            facilisi sit. Dictum tempor odio tortor orci et ut vitae. Faucibus
            arcu sagittis eu imperdiet volutpat et. Massa interdum aliquet a eu
            praesent lobortis.
          </p>
        </div>

        <div className="mt-4 border-t pt-4 space-y-3 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <RiProductHuntLine /> Digital Product Company
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> Nigeria
          </div>
          <div className="flex items-center gap-2">
            <MdCalendarToday /> Joined 29 August, 2021
          </div>
          <div className="flex items-center gap-2">
            <FaGlobe />
            <a
              href="https://www.loremipsum.example.com"
              className="text-blue-600 underline"
            >
              www.loremipsum.example.com
            </a>
          </div>
        </div>

        <hr className="bg-secondary text-secondary mt-4"></hr>
     

       
        {/* Stats */}
        <div className="grid grid-cols-3 text-center mt-6 text-sm font-medium text-gray-700">
          <div>
            <div>Advocates</div>
            <div className="font-bold text-black">0</div>
          </div>
          <div>
            <div>Products & Sales</div>
            <div className="font-bold text-black">0</div>
          </div>
          <div>
            <div>Payouts</div>
            <div className="font-bold text-black">0</div>
          </div>
        </div>
      </div>

      {/* Right Social Links */}
      <div className="w-full lg:w-[65%]">
        <h3 className="text-lg font-semibold mb-4">Social Links</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-xl p-4 flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <FaDiscord className="text-[#5865F2] text-xl" />
                </div>
                <div>
                  <div className="font-medium">Discord</div>
                  <a
                    href="https://discord.com/loremipsum"
                    className="text-sm text-gray-500 underline"
                  >
                    discord.com/loremipsum
                  </a>
                </div>
              </div>
              <div className="h-32 bg-gray-100 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
