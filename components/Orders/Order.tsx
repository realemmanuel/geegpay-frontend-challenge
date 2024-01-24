import Image from "next/image";
import React, { FC } from "react";

type Props = {
  profilePic: string;
  name: string;
  date: string;
  amount: string;
  paid: boolean;
};

const Order: FC<Props> = ({ profilePic, name, date, amount, paid }) => {
  return (
    <tr>
      <td>
        <div className="flex gap-2 items-center my-3">
          <Image
            src={profilePic}
            width={30}
            height={30}
            alt="Profile pic"
            className="dark:filter dark:invert"
          />
          <p className="text-[14px] w-fit font-[500] text-[#3A3F51] dark:text-gray-400">
            {name}
          </p>
        </div>
      </td>

      <td>
        <p className="text-[14px] w-fit font-[500] text-[#737373] dark:text-gray-400">
          {date}
        </p>
      </td>

      <td>
        <p className="text-[14px] w-fit font-[500] text-[#0D062D] dark:text-gray-400">
          {amount}
        </p>
      </td>

      <td>
        <p
          className={`text-[14px] w-fit font-[500] ${
            paid ? "text-[#34CAA5]" : "text-[#ED544E]"
          }`}
        >
          {paid ? "Paid" : "Refund"}
        </p>
      </td>

      <td>
        <div className="flex items-center gap-1 text-[14px] font-[300] text-[#0D062D] dark:text-gray-400">
          <Image
            src="/assets/images/download.svg"
            width={20}
            height={20}
            alt="Download Icon"
            className="dark:filter dark:invert"
          />
          <span>View</span>
        </div>
      </td>
    </tr>
  );
};

export default Order;
