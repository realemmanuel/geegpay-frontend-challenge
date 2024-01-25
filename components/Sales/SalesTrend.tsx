import { SALES_AMOUNT, SALES_CHART } from "@/data/sales";
import CalendarDropdown from "./CalendarDropdown";
import Chart from "./Chart";

const SalesTrend = () => {
  return (
    <section className="md:mx-5 bg-white dark:bg-gray-600 w-[97%] xl:w-[60%] h-fit md:h-fit lg:h-[420px] rounded-[14px] border-[#EDF2F7] dark:border-[#3d6185] border-[1px] flex flex-col gap-5 p-5">
      <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
        <h3 className="text-[#26282C] dark:text-gray-300 text-[17px] md:text-[20px] font-[400]">
          Sales Trends
        </h3>

        <CalendarDropdown />
      </div>

      <div className="w-full flex items-end gap-8 overflow-auto">
        <ul className="flex flex-col gap-7">
          {SALES_AMOUNT.map((item) => (
            <li
              key={item.id}
              className="text-[12px] text-[#525252] dark:text-gray-400 font-[600]"
            >
              {item.amount}
            </li>
          ))}
        </ul>

        <ul className="w-full z-30 justify-between mt-auto flex gap-5">
          {SALES_CHART.map((item) => (
            <li
              key={item.id}
              className="w-full transition-all duration-500 flex flex-col gap-3 items-center "
            >
              <Chart
                src={item.chartImg}
                height={item.height}
                amount={item.amount}
              />
              <span className="text-[14px] text-[#525252] dark:text-gray-400 font-[600]">
                {item.month}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SalesTrend;
