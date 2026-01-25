import { ArrowRightIcon, ArrowUpIcon, CheckIcon } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

interface ConversationStatusIconProps {
  status: "open" | "escalated" | "closed";
  className?: string;
}

const statusConfig = {
  open: {
    icon: ArrowRightIcon,
    bgColor: "bg-destructive",
  },
  escalated: {
    icon: ArrowUpIcon,
    bgColor: "bg-yellow-500",
  },
  closed: {
    icon: CheckIcon,
    bgColor: "bg-green-500",
  },
} as const;
const ConversationStatusIcon = ({
  status,
    className,
}: ConversationStatusIconProps) => {
    const config = statusConfig[status];
    const StatusIcon = config.icon;


  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full p-1.5",
        config.bgColor,
        className
      )}
    >
      <StatusIcon className="h-4 w-4 stroke-4 text-white" />
    </div>
  );
}

export default ConversationStatusIcon;