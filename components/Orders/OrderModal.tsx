import Image from "next/image";
import React, { FC } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CloseIcon from "@mui/icons-material/Close";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import { LAST_ORDERS } from "@/data/orders";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

type Props = {
  orderId: number;
};

const OrderModal: FC<Props> = ({ orderId }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
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
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex flex-col gap-5">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-start gap-2">
              <ReceiptOutlinedIcon className="mt-3" />
              <div className="flex flex-col">
                <h3 className="text-gray-700 dark:text-gray-300 text-[25px] md:text-[30px] font-bold">
                  Invoice
                </h3>

                <p className="text-gray-700 dark:text-gray-300 text-[14px] md:text-[14px] font-[200]">
                  Access has been granted
                </p>
              </div>
            </div>

            <AlertDialogCancel>
              <CloseIcon />
            </AlertDialogCancel>
          </div>

          <DropdownMenuSeparator />

          {LAST_ORDERS.filter((order) => order.id === orderId).map((order) => (
            <div key={order.id} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h1 className="font-[400] text-gray-700 dark:text-gray-300 text-[20px] md:text-[25px]">
                  Name
                </h1>
                <p className="text-gray-400 dark:text-gray-400 text-[14px] md:text-[16px] font-[200]">
                  {order.name}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="font-[400] text-gray-700 dark:text-gray-300 text-[20px] md:text-[25px]">
                  Date
                </h1>
                <p className="text-gray-400 dark:text-gray-400 text-[14px] md:text-[16px] font-[200]">
                  {order.date}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="font-[400] text-gray-700 dark:text-gray-300 text-[20px] md:text-[25px]">
                  Amount
                </h1>
                <p className="text-gray-400 dark:text-gray-400 text-[14px] md:text-[16px] font-[200]">
                  {order.amount}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="font-[400] text-gray-700 dark:text-gray-300 text-[20px] md:text-[25px]">
                  Status
                </h1>
                <p className="text-gray-400 dark:text-gray-400 text-[14px] md:text-[16px] font-[200]">
                  {order.paid ? "Paid" : "Refund"}
                </p>
              </div>

              <div className="flex justify-between flex-wrap gap-3">
                <AlertDialogCancel>
                  <PrintRoundedIcon />
                </AlertDialogCancel>

                <AlertDialogCancel>
                  <DownloadForOfflineRoundedIcon />
                </AlertDialogCancel>

                <AlertDialogCancel>
                  <QuestionAnswerRoundedIcon />
                </AlertDialogCancel>
              </div>
            </div>
          ))}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OrderModal;
