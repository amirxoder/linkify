import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/hook";
import { Settings2 } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const TopChat = () => {
  const contact = useAppSelector(
    (state) => state.currentContact.currentContact
  );

  return (
    <div className="w-full flex items-center justify-between  sticky top-0 z-50 h-[8vh]  p-2 border-b bg-background/30 backdrop-blur-[3px]">
      <div className="flex items-center">
        <Avatar>
          <AvatarImage
            src={contact?.avatar || undefined}
            alt={contact?.email}
            className="object-cover"
          />
          <AvatarFallback>{contact?.email[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="ml-2 flex flex-col">
          <h2 className="font-medium text-sm">{contact?.email} </h2>
          {/* is typing */}
          <div className="text-xs  flex items-center gap-1">
            <p className="text-secondary-foreground animate-pulse line-clamp-1">
              {contact?.email.split("@")[0]} is typing
            </p>
            <div className="animate-bounce animate-duration-[3000ms]">.</div>
            <div className="animate-bounce animate-duration-[3000ms] [animate-delay:-500ms]">
              .
            </div>
            <div className="animate-bounce animate-duration-[3000ms] [animate-delay:-1200ms]">
              .
            </div>
          </div>

          {/* Online */}
          {/* <p className="flex items-center gap-1">
            <span className="w-[4px] h-[4px] inline-block rounded-full bg-green-500"></span>
            online
          </p> */}
          {/* <p className="flex items-center gap-1 text-xs font-normal">
            <span className="w-[4px] h-[4px] inline-block rounded-full bg-muted-foreground"></span>
            Last seen recently
          </p> */}
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"secondary"} size={"icon"}>
            <Settings2 />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="mx-auto w-1/2 h-[12rem] relative ">
            <Avatar className="w-full h-[10.5rem]">
              <AvatarImage
                src={contact?.avatar || undefined}
                alt={contact?.email}
                className="object-cover"
              />
              <AvatarFallback>{contact?.email[0].toUpperCase()}</AvatarFallback>
            </Avatar>
          </div>

          <Separator className="my-2 " />

          <h1 className="text-center capitalize text-xs">{contact?.email}</h1>
          <div className="flex flex-col space-y-1">
            <div className="flex w-full items-center gap-1 justify-between">
              {contact?.firstname && (
                <div className="flex items-center gap-1 mt-4 w-full">
                  <p className="font-medium text-sm">First Name:</p>
                  <p className="text-muted-foreground text-sm">
                    {contact?.firstname}
                  </p>
                </div>
              )}
              {contact?.lastname && (
                <div className="flex items-center gap-1 mt-4 w-full">
                  <p className="font-medium text-sm">Last Name:</p>
                  <p className="text-muted-foreground text-sm">
                    {contact?.lastname}
                  </p>
                </div>
              )}
            </div>
            {contact?.bio && (
              <div className="flex pt-4 gap-1 mt-4 w-full">
                <p className="text-muted-foreground text-sm">
                  <span className="font-medium text-sm ">About: </span>
                  {contact?.bio}
                </p>
              </div>
            )}
          </div>
          <Separator className="my-4 " />

          <h2 className="text-xl mb-2">Images</h2>

          <div className="flex flex-col space-y-2">
            <div className="w-full h-36 relative">
              <Image
                src={"https://avatars.githubusercontent.com/u/124599?v=4"}
                alt="shadcn"
                fill
                className="object-cover rounded-md"
              />
              hi
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
