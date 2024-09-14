import React from "react";
import { cn } from "@/lib/utils";

type ChatBubbleProps = {
  message: string;
  className?: string;
  position?: "start" | "end";
  header?: string;
  imageSrc?: string;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  className = "",
  position,
  header,
  imageSrc,
}) => {
  return (
    <div className={cn("chat", position ? `chat-${position}` : "", className)}>
      {imageSrc && (
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="chat avatar" src={imageSrc} />
          </div>
        </div>
      )}
      {header && <div className="chat-header">{header}</div>}
      <div
        className={cn(
          "chat-bubble flex flex-col items-center justify-center",
          className
        )}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
