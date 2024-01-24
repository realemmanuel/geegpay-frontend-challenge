import Header from "@/components/Header";
import LastOrders from "@/components/Orders/LastOrders";
import TopPlatform from "@/components/Platform/TopPlatform";
import SalesTrend from "@/components/Sales/SalesTrend";
import FinancialStatistics from "@/components/Statistics/FinancialStatistics";

export default function Home() {
  return (
    <main className="ml-[20%] sm:ml-[10%] md:ml-[9%] lg:ml-[8%] xl:ml-[5%] w-[80%] sm:w-[90%] md:w-[91%] lg:w-[92%] transition-all duration-500 xl:w-[95%] z-50 pb-5">
      <Header />
      <div className="mt-10 flex xl:flex-row flex-col justify-between items-center gap-5">
        <SalesTrend />
        <FinancialStatistics />
      </div>

      <div className="mt-10 flex xl:flex-row flex-col justify-between items-center gap-5">
        <LastOrders />
        <TopPlatform />
      </div>
    </main>
  );
}
