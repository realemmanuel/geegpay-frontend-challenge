import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { SALES_AMOUNT, SALES_CHART } from "@/data/sales";
import Image from "next/image";

const SalesTrend = () => {
  return (
    <section className="md:mx-5 bg-white dark:bg-gray-600 w-[97%] xl:w-[60%] h-fit md:h-[400px] rounded-[14px] border-[#EDF2F7] dark:border-[#3d6185] border-[1px] flex flex-col gap-5 p-5">
      <div className="w-full flex flex-col md:flex-row justify-between md:items-center">
        <h3 className="text-[#26282C] dark:text-gray-300 text-[17px] md:text-[20px] font-[400]">
          Sales Trends
        </h3>

        <button className="flex items-center gap-3">
          <h4 className="text-[#3A3F51] dark:text-gray-300 text-[16px] font-[400]">
            Short by:
          </h4>

          <div className="w-fit border-[0.4px] border-[#78828A] bg-white dark:bg-gray-500 h-fit py-1 rounded-full px-3 flex items-center gap-2">
            <h4 className="text-[#26282C] dark:text-gray-300 text-[14px] font-[200]">
              Weekly
            </h4>

            <KeyboardArrowDownOutlinedIcon className="text-[#26282C]" />
          </div>
        </button>
      </div>

      <div className="w-full flex items-end gap-8 overflow-auto">
        <ul className="flex flex-col gap-5">
          {SALES_AMOUNT.map((item) => (
            <li key={item.id} className="text-[12px] text-[#525252] dark:text-gray-400 font-[600]">
              {item.amount}
            </li>
          ))}
        </ul>

        <ul className="w-full justify-between mt-auto flex gap-6">
          {SALES_CHART.map((item) => (
            <li key={item.id} className="flex flex-col gap-3 items-center">
              {item.topSale && (
                <Image
                  src="/assets/images/top-sale.svg"
                  width={100}
                  height={100}
                  alt="Chart"
                  className="mt-auto"
                />
              )}
              <Image
                src={item.chartImg}
                width={30}
                height={item.height}
                alt="Chart"
                className="mt-auto dark:filter dark:invert"
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
