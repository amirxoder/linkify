import { cn } from "@/lib/utils";
import { FC } from "react";
import { Skeleton } from "../ui/skeleton";
import { Check } from "lucide-react";

interface MessageLoadingProps {
  isReceived?: boolean;
}

const MessageLoading: FC<MessageLoadingProps> = ({ isReceived }) => {
  return (
    <div
      className={cn(
        "m-2.5 font-medium text-xs flex",
        isReceived ? "justify-start" : "justify-end"
      )}
    >
      <Skeleton
        className={cn(
          "relative inline p-2 pl-2.5 pr-12",
          isReceived ? "bg-primary/20" : "bg-secondary/20"
        )}
      >
        <Skeleton className="w-36 h-5" />
        <span className="text-xs absolute right-1 bottom-0 opacity-60">
          <Check size={16} />
        </span>
      </Skeleton>
    </div>
  );
};

export default MessageLoading;
