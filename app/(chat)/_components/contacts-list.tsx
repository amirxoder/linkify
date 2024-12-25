import { UserTypeProps } from "@/app/types/userTyps";
import { Input } from "@/components/ui/input";
import { Settings } from "./settings";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const ContactsList = ({
  contactsList,
}: {
  contactsList: UserTypeProps[];
}) => {
  const RenderedContact = ({ contact }: { contact: UserTypeProps }) => (
    <div className="flex justify-between items-center cursor-pointer hover:bg-secondary/50 p-4">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Avatar className="z-50">
            <AvatarImage
              src={contact.avatar}
              alt={contact.email}
              className="object-cover"
            />
            <AvatarFallback>{contact.email[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* top bar */}
      <div className="flex  items-center justify-center bg-background pl-2 sticky top-0">
        <Settings />
        <div className="m-2 w-full">
          <Input className="bg-secondary" type="text" placeholder="Search..." />
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
