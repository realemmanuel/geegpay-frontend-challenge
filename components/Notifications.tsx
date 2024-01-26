import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

const Notifications = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-[0.4px] border-[#78828A] dark:border-[#333a40] bg-white dark:bg-black rounded-full p-[7px] w-fit h-fit flex items-center">
        <NotificationsNoneRoundedIcon className="text-[#26282C] dark:text-white" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Alert: Unusual Transaction Detected</DropdownMenuItem>
        <DropdownMenuItem>Update: Account Balance Change</DropdownMenuItem>
        <DropdownMenuItem>Credit Score Update</DropdownMenuItem>
        <DropdownMenuItem>
          Congratulations! Emergency Fund Goal Achieved
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notifications;
