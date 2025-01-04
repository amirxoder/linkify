import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { FC } from "react";

interface MessageCardProps {
  isReceived?: boolean;
  message?: string;
}

export const MessageCard: FC<MessageCardProps> = ({ isReceived, message }) => {
  return (
    <div
      className={cn(
        "m-2.5 font-medium text-xs flex ",
        isReceived ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "relative inline p-2 pl-2.5 pr-12 max-w-full ",
          isReceived
            ? "bg-gradient-to-r from-primary/30 to-secondary/30 backdrop-blur-[1px] rounded-r-lg rounded-tl-xl"
            : "bg-secondary/30 backdrop-blur-[1px] rounded-l-lg rounded-tr-xl"
        )}
      >
        <p className="text-sm text-white">{message}</p>
        <span className="text-xs absolute right-1 bottom-0 opacity-60">
          <Check size={16} />
        </span>
      </div>
    </div>
  );
};
