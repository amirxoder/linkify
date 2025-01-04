// import { MessageCard } from "@/components/cards/message-card";
// import { ChatLoading } from "@/components/loadings/chat.loading";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { messageSchema } from "@/lib/validation";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Paperclip, Smile, SendHorizonal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { MessageCard } from "@/components/cards/message-card";
import { BackgroundLines } from "@/components/ui/background-lines";
import { ChatLoading } from "@/components/loadings/chat.loading";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import EmojiPicker from "emoji-picker-react";

interface ChatProps {
  messageForm: UseFormReturn<z.infer<typeof messageSchema>>;
  onSendMessage: (values: z.infer<typeof messageSchema>) => void;
  messages: {
    message: string;
    isReceived: boolean;
    _id: string;
  }[];
}

export const Chat: FC<ChatProps> = ({
  messageForm,
  onSendMessage,
  messages,
}) => {
  const handleEmojiSelect = (emoji: string) => {
    messageForm.setValue("message", messageForm.getValues("message") + emoji);
  };
  return (
    <div className="flex flex-col justify-end z-40 min-h-[92vh] relative">
      {/* Loading */}
      {/* <ChatLoading /> */}
      {/* Messages */}

      {messages.map((message) => (
        <MessageCard
          key={message._id}
          message={message.message}
          isReceived={message.isReceived}
        />
      ))}

      {/* start conversation */}

      {/* <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 ">
        <h1
          className="inline-block text-[4rem] animate-wave cursor-pointer"
          onClick={() => {
            onSendMessage({ message: "👋" });
          }}
        >
          👋
        </h1>
      </BackgroundLines> */}

      {/* Input */}
      <Form {...messageForm}>
        <form
          onSubmit={messageForm.handleSubmit(onSendMessage)}
          className="w-full   flex sticky left-80 right-0 bottom-0 p-2 bg-background/40 border-t border-secondary/30 backdrop-blur-sm"
        >
          <Button
            className="bg-transparent "
            size={"icon"}
            type="button"
            variant={"secondary"}
          >
            <Paperclip />
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="bg-transparent "
                size={"icon"}
                type="button"
                variant={"secondary"}
              >
                <Smile />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
              <EmojiPicker
                style={{
                  backgroundColor: "transparent ",
                  border: "none",
                  background: "transparent",

                  boxShadow: "none",
                }}
                onEmojiClick={({ emoji }: { emoji: string }) =>
                  handleEmojiSelect(emoji)
                }
                searchDisabled
                skinTonesDisabled
              />
            </PopoverContent>
          </Popover>

          <FormField
            control={messageForm.control}
            name="message"
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Type a message..."
                className="w-full outline-none border-none valid:border-none valid:ring-0 focus:ring-0 rounded-none ring-0  "
              />
            )}
          />

          <Button
            className="bg-secondary/50 "
            size={"icon"}
            type="submit"
            variant={"secondary"}
          >
            <SendHorizonal />
          </Button>
        </form>
      </Form>
    </div>
  );
};
