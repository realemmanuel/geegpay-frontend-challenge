"use client";

import { SIDEBAR_BOTTOM_LINKS, SIDEBAR_LINKS } from "@/data/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useAppSelector } from "@/lib/hooks";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";

const Sidebar = () => {
  const pathname = usePathname();
  const isOpen = useAppSelector((state) => state.sidebar.isOpen);
  const { setTheme, theme } = useTheme();

  return (
    <nav
      className={`${
        isOpen
          ? "w-[20%] sm:w-[10%] md:w-[9%] lg:w-[8%] xl:w-[5%] bg-[#F7F8FA] border-r-[1px] dark:bg-black top-0 bottom-0 fixed left-0 overflow-y-auto overflow-hidden transition-all duration-500"
          : "hidden transition-all duration-500"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <Image
            src="/assets/images/logo.svg"
            width={40}
            height={40}
            alt="logo"
            className="my-5 mx-auto"
          />

          <ul className="flex flex-col gap-5">
            {SIDEBAR_LINKS.map((link) => (
              <Link href="/" key={link.id}>
                <Image
                  src={link.imgSrc}
                  width={40}
                  height={40}
                  alt={link.imgSrc}
                  className={`w-full h-[40px] ${
                    link.route === pathname &&
                    "border-r-2 border-[#0D062D] rounded-[2px] dark:filter dark:invert"
                  }`}
                />
              </Link>
            ))}
          </ul>
        </div>

        <div className="my-10 bg-white p-2 rounded-full w-[60%] mx-auto flex flex-col items-center gap-2">
          <button
            className={`${
              theme === "light"
                ? "w-fit h-fit p-[6px] bg-[#34CAA5] rounded-full flex text-white"
                : "w-fit h-fit p-[6px] text-gray-500 bg-white"
            }`}
            onClick={() => setTheme("light")}
          >
            <LightModeIcon fontSize="small" />
          </button>

          <button
            className={`${
              theme === "dark"
                ? "w-fit h-fit p-[6px] bg-[#34CAA5] rounded-full flex text-white"
                : "w-fit h-fit p-[6px] text-gray-500"
            }`}
            onClick={() => setTheme("dark")}
          >
            <NightsStayIcon fontSize="small" />
          </button>
        </div>

        <div className="mt-auto mb-5 pb-10 flex flex-col items-center gap-5">
          {SIDEBAR_BOTTOM_LINKS.map((link) => (
            <Link href="/" key={link.id}>
              <Image
                src={link.imgSrc}
                width={40}
                height={40}
                alt={link.imgSrc}
                className=""
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
