"use client";

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { getCurrentDate } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  openSidebar,
  closeSidebar,
} from "@/lib/features/sidebar/sidebar-slice";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CloseIcon from "@mui/icons-material/Close";
import ProfileAvatar from "./ProfileAvatar";
import Notifications from "./Notifications";

const Header = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);

  return (
    <header className="md:sticky md:top-0 bg-white dark:bg-background w-full h-fit pb-2 md:h-[85px] flex flex-col md:flex-row gap-5 justify-between  md:items-center py-2 border-b-[1px] z-50">
      <div className="ml-5 flex w-[90%] md:hidden justify-between">
        <h1 className="text-[#26282C] dark:text-gray-200 text-[23px] font-[800]">
          Dashboard
        </h1>

        <button
          className="border-[0.4px] border-[#78828A] bg-white dark:bg-black rounded-full p-[7px] w-fit h-fit flex items-center"
          onClick={() => {
            if (isOpen) {
              dispatch(closeSidebar());
            } else {
              dispatch(openSidebar());
            }
          }}
        >
          {isOpen ? <CloseIcon /> : <DashboardRoundedIcon />}
        </button>
      </div>

      <h1 className="text-[#26282C] dark:text-gray-200 text-[23px] font-[800] ml-5 hidden md:inline">
        Dashboard
      </h1>

      <div className="w-[90%] md:w-fit md:mr-5 flex flex-col md:flex-row ml-5 md:ml-0 md:items-center gap-3 md:gap-5">
        <div className="flex gap-5 flex-col justify-between md:justify-normal sm:flex-row">
          <div className="w-full md:w-[35vh] border-[0.4px] border-[#78828A] dark:border-[#333a40] bg-white dark:bg-black h-[48px] rounded-full px-3 flex items-center gap-2">
            <SearchIcon className="text-[#78828A] dark:text-white" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-[#A3A3A3] dark:text-white placeholder:text-[#A3A3A3] dark:placeholder:text-white text-[13px] bg-transparent outline-none"
            />
          </div>

          <div className="w-full md:w-fit flex flex-row justify-between md:justify-normal items-center gap-5">
            <h3 className="text-[#26282C] dark:text-gray-300 font-medium text-[14px] flex items-center gap-2">
              <CalendarMonthRoundedIcon className="text-[#26282C] dark:text-slate-300" />
              <span className="lg:inline md:hidden">{getCurrentDate()}</span>
            </h3>

            <Notifications />
          </div>
        </div>

        <ProfileAvatar />
      </div>
    </header>
  );
};

export default Header;
