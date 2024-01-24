"use client";

import React from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { getCurrentDate } from "@/lib/utils";

const Header = () => {
  return (
    <header className="md:sticky md:top-0 bg-white dark:bg-background w-full h-fit pb-2 md:h-[85px] flex flex-col md:flex-row gap-5 justify-between  md:items-center py-2 border-b-[1px]">
      <h1 className="text-[#26282C] dark:text-gray-400 text-[25px] font-[400] ml-5">
        Dashboard
      </h1>

      <div className="w-full md:w-fit mr-5 flex flex-col md:flex-row items-center gap-3 md:gap-5">
        <div className="flex gap-5 flex-col sm:flex-row">
          <div className="w-full md:w-[35vh] border-[0.4px] border-[#78828A] bg-white dark:bg-gray-600 h-[48px] rounded-full px-3 flex items-center gap-2">
            <SearchIcon className="text-[#78828A] dark:text-white" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-[#A3A3A3] dark:text-white placeholder:text-[#A3A3A3] dark:placeholder:text-white text-[13px] bg-transparent outline-none"
            />
          </div>

          <div className="flex flex-row items-center gap-5">
            <h3 className="text-[#26282C] dark:text-gray-500 font-medium text-[14px] flex items-center gap-2">
              <CalendarMonthRoundedIcon className="text-[#26282C] dark:text-gray-400" />
              <span className="lg:inline md:hidden">{getCurrentDate()}</span>
            </h3>

            <button className="border-[0.4px] border-[#78828A] bg-white dark:bg-gray-600 rounded-full p-[7px] w-fit h-fit flex items-center">
              <NotificationsNoneRoundedIcon className="text-[#26282C] dark:text-white" />
            </button>
          </div>
        </div>

        <button className="w-fit border-[0.4px] border-[#78828A] bg-white dark:bg-gray-600 h-fit py-1 rounded-full px-3 flex items-center gap-2">
          <Image
            src="/assets/images/user1.svg"
            width={40}
            height={40}
            alt="User"
          />

          <div className="flex lg:inline md:hidden flex-col items-end">
            <h4 className="text-[#26282C] dark:text-white text-[16px] font-[400]">
              Justin Bergson
            </h4>
            <span className="text-[14px] dark:text-gray-200 text-[#787486] font-[400]">
              Justin@gmail.com
            </span>
          </div>
          <KeyboardArrowDownOutlinedIcon className="text-[#26282C]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
