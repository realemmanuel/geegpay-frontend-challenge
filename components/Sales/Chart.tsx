import React, { FC, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  height: number;
  amount: string;
};

const Chart: FC<Props> = ({ src, height, amount }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div className="w-full mt-auto transition-all duration-500 flex flex-col gap-3 items-center">
      {isHovered && (
        <div className="relative text-center w-fit flex flex-col items-center">
          <Image
            src="/assets/images/amount-box.svg"
            width={200}
            height={200}
            alt="Chart"
            className="mt-auto min-w-fit"
          />
          <span className="text-white mt-[4px] absolute text-[12px] font-[400]">
            {amount}
          </span>
        </div>
      )}
      <Image
        style={{
          background: !isHovered
            ? "linear-gradient(180deg, rgba(10,249,80,1) 0%, rgba(130,255,116,1) 35%, rgba(186,255,186,0.5704656862745099) 100%)"
            : "rgb(10, 249, 80)",
          maxHeight: height,
          maxWidth: 30,
        }}
        src={src}
        width={30}
        height={100}
        alt="Chart"
        className="dark:filter dark:invert rounded-t-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default Chart;