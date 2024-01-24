import React from "react";
import Link from "next/link";

const LastOrders = () => {
  return (
    <section className="md:mx-5 bg-white dark:bg-gray-600 w-[97%] xl:w-[60%] h-fit md:h-[400px] rounded-[14px] border-[#EDF2F7] dark:border-[#3d6185] border-[1px] flex flex-col gap-5 p-5">
      <div className="w-full flex justify-between items-center">
        <h3 className="text-[#26282C] dark:text-gray-300 text-[17px] md:text-[20px] font-[400]">
          Last Orders
        </h3>

        <Link href="" className="text-[#34CAA5] text-[15px] md:text-[20px] font-[400]">
          See All
        </Link>
      </div>
    </section>
  );
};

export default LastOrders;
