import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleRight,
} from "react-icons/fa";
import { createContext, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { checker, logo, logoIcon } from "../../assets";

const SidebarContext = createContext();

export default function Sidebar({ expanded, setExpanded }) {
  return (
    <aside
      className={`h-screen fixed ${
        expanded ? "w-72" : "w-20"
      } transition-all duration-500  bg-white dark:bg-black text-black dark:text-white shadow-lg`}
    >
      <nav className="h-full flex flex-col  bg-white dark:bg-black text-black dark:text-white border-r shadow-sm">
        <div className="p-4 pb-2 flex items-center justify-between">
          <img
            src={expanded ? logo : logoIcon}
            className="transition-all w-40"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-xl"
          >
            {expanded ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
          </button>
        </div>
        <div className="flex-1 pt-16">
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="px-3 py-6 flex flex-col gap-4">
              <SidebarItem to="/brands/" text="Dashboard" icon="🏠" />
              <SidebarItem to="/brands/insights" text="Insights" icon="📊" />
              <SidebarItem to="/brands/chat" text="Chat" icon="💬" />
              <SidebarItem to="/brands/products" text="Products & Sales" icon="🛒" />
              <SidebarItem to="/brands/advocates" text="Advocates" icon="🤝" />
              <SidebarItem to="/brands/intelligence" text="Intelligence" icon="🧠" />
              <SidebarItem to="/brands/payouts" text="Payouts" icon="💰" />
            </ul>
          </SidebarContext.Provider>
          <hr className="bg-secondary text-secondary"></hr>
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="px-3 py-6 flex flex-col gap-4">
              <SidebarItem to="/brands/api-docs" text="API Documentation" icon="🏠" />
              <SidebarItem to="/brands/notifcations" text="Notifications" icon="📊" />
              <SidebarItem to="/brands/settings" text="Settings" icon="💬" />
              <SidebarItem to="/brands/support" text="Support" icon="🛒" />
            </ul>
          </SidebarContext.Provider>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <img src={checker} alt="" className="rounded-lg" />
          <button className="w-full py-2 rounded-lg bg-[#F7B90F] text-[#2F2E2E] hover:bg-yellow-500 text-xl font-medium">
            Upgrade Plan
          </button>
        </div>
        <div className="border-t flex items-center p-4">
          <img src={logoIcon} className="w-10 h-10 rounded-full" />
          {expanded && (
            <div className="ml-3">
              <p className="text-sm text-gray-600">Welcome back 👋</p>
              <p className="text-lg font-semibold capitalize">John Doe</p>
            </div>
          )}
          <FaAngleRight className="ml-auto" />
        </div>
      </nav>
    </aside>
  );
}

import { useLocation } from "react-router-dom";

export function SidebarItem({ to, icon, text }) {
  const { pathname } = useLocation();
  const { expanded } = useContext(SidebarContext);
  const isActive = pathname === to;

  return (
    <li
      className={`text-xl relative flex items-center font-medium rounded-full cursor-pointer transition-colors
      ${
        isActive
          ? "bg-secondary text-primary flex items-center justify-center w-fit p-3"
          : "hover:bg-gray-100 text-gray-600 py-3 px-6"
      }`}
    >
      <NavLink to={to} className="flex items-center w-full">
        <span>{icon}</span>
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "hidden"
          }`}
        >
          {text}
        </span>
      </NavLink>
    </li>
  );
}
