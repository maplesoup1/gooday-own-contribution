import React from "react";
import H0 from "../h0";
import H1 from "../h1";
import H2 from "../h2";
import ChatBubble from "../chatbubble";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const font_test = () => {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <H1>Font test</H1>
      <H0>Font test</H0>
      <H2>Font test</H2>
      <H2 className="font-bold">Font test</H2>
      <ChatBubble position="start" message="Nice to meet you all!" />
      <HoverCard>
        <HoverCardTrigger className="underline hover:text-blue-500">
          @
        </HoverCardTrigger>
        <HoverCardContent align="start" sideOffset={10}>
          Supported langurage: Chinese English!
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default font_test;
