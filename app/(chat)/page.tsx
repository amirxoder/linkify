// import { Loader2 } from "lucide-react";
import { ContactsList } from "./_components/contacts-list";

const contacts = [
  {
    email: "lQv1f@example.com",
    avatar: "",
    _id: "1",
  },
  {
    email: "2Qiof@example.com",
    avatar: "https://github.com/shadcn.png",
    _id: "2",
  },
  {
    email: "2fasdfq2@gm.com",
    avatar: "https://github.com/shadcn.png",
    _id: "3",
  },
  {
    email: "asdf321@ya.com",
    avatar: "",
    _id: "4",
  },
];

export default function Home() {
  return (
    <>
      {/* Sidebar */}
      <div className="w-80 h-screen border-r fixed inset-0">
        {/* loader */}
        {/* <div className="w-full  h-[95vh] flex items-center justify-center">
          <Loader2 className="animate-spin" size={50} />
        </div> */}

        {/* chat list */}
        <ContactsList contactsList={contacts} />
      </div>
      {/* Chat area */}
    </>
  );
}
