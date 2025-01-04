"use client";
import { useEffect } from "react";
import { ContactsList } from "./_components/contacts-list";
import { useAppSelector } from "@/lib/hook";
import { useRouter } from "next/navigation";
import { AddContact } from "./_components/add-contact";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { emailSchema, messageSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { TopChat } from "./_components/top-chat";
import { Chat } from "./_components/chat";

const contacts = [
  {
    email: "john.smith@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    _id: "1",
    lastname: "Smith",
    firstname: "John",
    bio: "A software engineer with a passion for clean code and innovative solutions.",
  },
  {
    email: "jane.doe@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    _id: "2",
    lastname: "Doe",
    firstname: "Jane",
    bio: "A UI/UX designer who loves creating intuitive and beautiful interfaces.",
  },
  {
    email: "emily.johnson@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=3",
    _id: "3",
    lastname: "Johnson",
    firstname: "Emily",
    bio: "A product manager with a knack for bringing teams together and achieving goals.",
  },
  {
    email: "michael.brown@yahoo.com",
    avatar: "https://i.pravatar.cc/150?img=4",
    _id: "4",
    lastname: "Brown",
    firstname: "Michael",
    bio: "A full-stack developer specializing in modern web technologies and frameworks.",
  },
  {
    email: "sarah.williams@example.com",
    avatar: "https://i.pravatar.cc/150?img=5",
    _id: "5",
    lastname: "Williams",
    firstname: "Sarah",
    bio: "A data scientist who loves uncovering insights from complex datasets.",
  },
  {
    email: "david.taylor@cybermail.com",
    avatar: "https://i.pravatar.cc/150?img=6",
    _id: "6",
    lastname: "Taylor",
    firstname: "David",
    bio: "A cybersecurity specialist focused on ethical hacking and vulnerability assessment.",
  },
  {
    email: "sophia.martinez@contentcreator.net",
    avatar: "https://i.pravatar.cc/150?img=7",
    _id: "7",
    lastname: "Martinez",
    firstname: "Sophia",
    bio: "A content writer passionate about storytelling and digital marketing.",
  },
  {
    email: "james.anderson@appdev.com",
    avatar: "https://i.pravatar.cc/150?img=8",
    _id: "8",
    lastname: "Anderson",
    firstname: "James",
    bio: "A mobile app developer dedicated to crafting seamless user experiences.",
  },
  {
    email: "olivia.thompson@graphicart.com",
    avatar: "https://i.pravatar.cc/150?img=9",
    _id: "9",
    lastname: "Thompson",
    firstname: "Olivia",
    bio: "A graphic designer with a flair for creating eye-catching visuals.",
  },
  {
    email: "lucas.hernandez@backendpro.org",
    avatar: "https://i.pravatar.cc/150?img=10",
    _id: "10",
    lastname: "Hernandez",
    firstname: "Lucas",
    bio: "A backend developer passionate about building robust and scalable systems.",
  },
  {
    email: "olivia.thompson@graphicart.com",
    avatar: "https://i.pravatar.cc/150?img=9",
    _id: "9",
    lastname: "Thompson",
    firstname: "Olivia",
    bio: "A graphic designer with a flair for creating eye-catching visuals.",
  },
  {
    email: "lucas.hernandez@backendpro.org",
    avatar: "https://i.pravatar.cc/150?img=10",
    _id: "10",
    lastname: "Hernandez",
    firstname: "Lucas",
    bio: "A backend developer passionate about building robust and scalable systems.",
  },
  {
    email: "olivia.thompson@graphicart.com",
    avatar: "https://i.pravatar.cc/150?img=9",
    _id: "9",
    lastname: "Thompson",
    firstname: "Olivia",
    bio: "A graphic designer with a flair for creating eye-catching visuals.",
  },
  {
    email: "lucas.hernandez@backendpro.org",
    avatar: "https://i.pravatar.cc/150?img=10",
    _id: "10",
    lastname: "Hernandez",
    firstname: "Lucas",
    bio: "A backend developer passionate about building robust and scalable systems.",
  },
  {
    email: "olivia.thompson@graphicart.com",
    avatar: "https://i.pravatar.cc/150?img=9",
    _id: "9",
    lastname: "Thompson",
    firstname: "Olivia",
    bio: "A graphic designer with a flair for creating eye-catching visuals.",
  },
  {
    email: "lucas.hernandez@backendpro.org",
    avatar: "https://i.pravatar.cc/150?img=10",
    _id: "10",
    lastname: "Hernandez",
    firstname: "Lucas",
    bio: "A backend developer passionate about building robust and scalable systems.",
  },
  {
    email: "olivia.thompson@graphicart.com",
    avatar: "https://i.pravatar.cc/150?img=9",
    _id: "9",
    lastname: "Thompson",
    firstname: "Olivia",
    bio: "A graphic designer with a flair for creating eye-catching visuals.",
  },
  {
    email: "lucas.hernandez@backendpro.org",
    avatar: "https://i.pravatar.cc/150?img=10",
    _id: "10",
    lastname: "Hernandez",
    firstname: "Lucas",
    bio: "A backend developer passionate about building robust and scalable systems.",
  },
  {
    email: "olivia.thompson@graphicart.com",
    avatar: "https://i.pravatar.cc/150?img=9",
    _id: "9",
    lastname: "Thompson",
    firstname: "Olivia",
    bio: "A graphic designer with a flair for creating eye-catching visuals.",
  },
  {
    email: "lucas.hernandez@backendpro.org",
    avatar: "https://i.pravatar.cc/150?img=10",
    _id: "10",
    lastname: "Hernandez",
    firstname: "Lucas",
    bio: "A backend developer passionate about building robust and scalable systems.",
  },
];

const messages = [
  {
    message: "Hello",
    isReceived: true,
    _id: "1",
  },
  {
    message: "Hi",
    isReceived: false,
    _id: "2",
  },
  {
    message: "How are you?",
    isReceived: true,
    _id: "3",
  },
  {
    message: "I am fine",
    isReceived: false,
    _id: "4",
  },
];

export default function Home() {
  const { replace } = useRouter();
  const currentContact = useAppSelector(
    (state) => state.currentContact.currentContact
  );

  const contactForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const messageForm = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      message: "",
    },
  });

  const onCreateContact = (values: z.infer<typeof emailSchema>) => {
    // call api to create contact
    console.log(values);
  };

  const onSendMessage = (values: z.infer<typeof messageSchema>) => {
    // call api to send message
    console.log(values);
    messageForm.reset();
  };

  useEffect(() => {
    replace("/");
  }, [replace]);

  return (
    <>
      {/* Sidebar */}
      <div className="w-80 h-screen border-r   fixed inset-0 overflow-y-auto">
        {/* loader */}
        {/* <div className="w-full  h-[95vh] flex items-center justify-center">
          <Loader2 className="animate-spin" size={50} />
        </div> */}

        {/* chat list */}
        <ContactsList contactsList={contacts} />
      </div>
      {/* Chat area */}
      <div
        className="pl-80 w-full 
      "
      >
        {/* Add contact */}
        {!currentContact?._id && (
          <AddContact
            contactForm={contactForm}
            onCreateContact={onCreateContact}
          />
        )}
        {/* Chat */}
        {currentContact?._id && (
          <div className="w-full relative">
            <div className="fixed left-80 inset-0 h-full w-full  bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            {/* Top chat */}
            <TopChat />

            {/* Chat */}
            <Chat
              messages={messages}
              messageForm={messageForm}
              onSendMessage={onSendMessage}
            />
          </div>
        )}
      </div>
    </>
  );
}
