import { Button } from "@/components/ui/button";
import {
  Info,
  LogIn,
  Mail,
  Moon,
  Settings2,
  Settings as SettingsIcon,
  Sun,
  TriangleAlert,
  Upload,
  UserPlus,
  VolumeOff,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PiNotification } from "react-icons/pi";
import { InformationForm } from "@/components/forms/information-form";
import { EmailForm } from "@/components/forms/email-form";
import { NotificationForm } from "@/components/forms/notification-form";
import { DangerZoneForm } from "@/components/forms/danger-zone-form";

export const Settings = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"secondary"}
            size={"icon"}
            className="bg-background/80"
          >
            <SettingsIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <h2 className="pt-2 pl-2 text-muted-foreground">
            Settings: <span className="text-white">info@saa.com</span>
          </h2>
          <Separator className="my-2" />
          <div className="flex flex-col space-y-2">
            <div
              className="flex items-center gap-2 p-2 hover:bg-secondary/40  cursor-pointer rounded-sm"
              onClick={() => setIsProfileOpen(true)}
            >
              <Settings2 size={16} />
              <span className="text-sm">Profile</span>
            </div>

            <div className="flex items-center gap-2 p-2 hover:bg-secondary/40  cursor-pointer rounded-sm">
              <UserPlus size={16} />
              <span className="text-sm">Create Contact</span>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-secondary/40  cursor-pointer rounded-sm">
              <div className="flex items-center gap-2">
                <VolumeOff size={16} />
                <span className="text-sm">Mute</span>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between p-2 hover:bg-secondary/40  cursor-pointer rounded-sm">
              <div className="flex items-center gap-2">
                {resolvedTheme === "dark" ? (
                  <Sun size={16} />
                ) : (
                  <Moon size={16} />
                )}
                <span className="text-sm">
                  {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              </div>
              <Switch
                checked={resolvedTheme === "dark" ? true : false}
                onCheckedChange={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
              />
            </div>

            <div className="flex items-center gap-2 p-2 hover:bg-secondary/40  cursor-pointer rounded-sm">
              <LogIn size={16} />
              <span className="text-sm">Logout</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <Sheet open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>My Profile</SheetTitle>
            <SheetDescription>
              Setting up your profile will help you connect with your friends
              and family easily.
            </SheetDescription>
          </SheetHeader>

          <Separator className="my-2" />

          <div className="mx-auto w-1/2 h-[10.5rem] relative">
            <Avatar className="w-full h-[10.5rem]">
              <AvatarFallback className="text-6xl uppercase ">
                AB
              </AvatarFallback>
            </Avatar>
            <Button
              size={"icon"}
              className="rounded-full left-0 bottom-[0px] absolute"
            >
              <Upload size={16} />
            </Button>
          </div>

          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="item-1" className="bg-background/30">
              <AccordionTrigger className="px-2">
                <div className="flex gap-2">
                  <Info size={18} />
                  Basic Information
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-2 mt-2">
                <InformationForm />
              </AccordionContent>

              <AccordionItem value="item-2">
                <AccordionTrigger className="px-2">
                  <div className="flex gap-2">
                    <Mail size={18} />
                    Email
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-2 mt-2">
                  <EmailForm />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="px-2">
                  <div className="flex gap-2">
                    <PiNotification size={18} />
                    Notification
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-2 mt-2">
                  <NotificationForm />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="px-2 bg-destructive/20 ">
                  <div className="flex gap-2">
                    <TriangleAlert size={18} />
                    Danger Zone
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-2 mt-2">
                  <DangerZoneForm />
                </AccordionContent>
              </AccordionItem>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet>
    </>
  );
};
