"use client";
import { UserTypeProps } from "@/app/types/userTyps";
import { Input } from "@/components/ui/input";
import { Settings } from "./settings";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { setCurrentContact } from "@/lib/features/currentContact/currentContactSlice";

export const ContactsList = ({
  contactsList,
}: {
  contactsList: UserTypeProps[];
}) => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const currentContact = useAppSelector(
    (state) => state.currentContact.currentContact
  );
  const RenderedContact = ({ contact }: { contact: UserTypeProps }) => {
    const onChatClick = () => {
      if (currentContact?._id === contact._id) return;
      console.log(`chat with ${contact.email}`);
      dispatch(setCurrentContact(contact));
      push(`/?chat=${contact._id}`);
      console.log("Current contact:", currentContact);
    };
    return (
      <div
        className={cn(
          `flex justify-between items-center cursor-pointer hover:bg-secondary/50 p-2`,
          currentContact?._id === contact._id && "bg-secondary/50"
        )}
        onClick={onChatClick}
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <Avatar className="">
              <AvatarImage
                src={contact.avatar}
                alt={contact.email}
                className="object-cover"
              />
              <AvatarFallback>{contact.email[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full" />
          </div>
          <div>
            <h2 className="capitalize line-clamp-1 text-sm ">
              {contact.email.split("@")[0]}
            </h2>
            <p className="text-xs line-clamp-1 text-muted-foreground">
              No message yet
            </p>
          </div>
        </div>

        <div className="self-end">
          <p className="text-xs text-muted-foreground">19:20 pm</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* top bar */}
      <div className="flex  items-center justify-center bg-background/30 backdrop-blur-[3px] pl-2 sticky top-0 z-10 border-b">
        <Settings />
        <div className="m-2 w-full">
          <Input
            className="bg-background/80"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* chat list */}
      {contactsList.length === 0 && (
        <div className="w-full flex items-center justify-center h-[95vh]">
          <p className="flex items-center gap-2">
            Contacts List is empty
            <span className="text-2xl">🤷‍♂️</span>
          </p>
        </div>
      )}

      {contactsList.length > 0 &&
        contactsList?.map((contact, index) => (
          <RenderedContact key={index} contact={contact} />
        ))}
    </>
  );
};
