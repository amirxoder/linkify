import { ChevronDown, PlayCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { SOUNDS } from "@/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useAudio } from "@/hooks/use-audio";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";

export const NotificationForm = () => {
  const [selectedSound, setSelectedSound] = useState("");

  const { playSound } = useAudio();

  const onPlaySound = (value: string) => {
    setSelectedSound(value);
    playSound(value);
  };

  return (
    <div className="bg-background p-4 rounded-md">
      <div className="flex text-center justify-between relative items-center ">
        <div className="flex flex-col">
          <p>Notification Sound</p>
          <p className="text-xs text-muted-foreground">{selectedSound}</p>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button size={"sm"} variant={"secondary"}>
              Select <ChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-60 absolute right-0 top-0">
            <div className="flex flex-col space-y-1">
              {SOUNDS.map((sound, index) => (
                <div
                  className={cn(
                    "flex justify-between items-center bg-secondary cursor-pointer hover:bg-primary/10 rounded-sm",
                    selectedSound === sound.label &&
                      "bg-background text-primary"
                  )}
                  key={index}
                  onClick={() => onPlaySound(sound.value)}
                >
                  <p className="justify-start px-2 text-xs ">{sound.label}</p>
                  <Button size={"icon"} variant={"ghost"}>
                    <PlayCircle />
                  </Button>
                </div>
              ))}
            </div>
            <Button className="w-full mt-2">Save</Button>
          </PopoverContent>
        </Popover>
      </div>
      <Separator className="my-2" />
      <div className="flex text-center justify-between relative items-center ">
        <div className="flex flex-col">
          <p>Sending Sound</p>
          <p className="text-xs text-muted-foreground">{selectedSound}</p>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button size={"sm"} variant={"secondary"}>
              Select <ChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-60 absolute right-0 top-0">
            <div className="flex flex-col space-y-1">
              {SOUNDS.map((sound, index) => (
                <div
                  className={cn(
                    "flex justify-between items-center bg-secondary cursor-pointer hover:bg-primary/10 rounded-sm",
                    selectedSound === sound.label &&
                      "bg-background text-primary"
                  )}
                  key={index}
                  onClick={() => onPlaySound(sound.value)}
                >
                  <p className="justify-start px-2 text-xs ">{sound.label}</p>
                  <Button size={"icon"} variant={"ghost"}>
                    <PlayCircle />
                  </Button>
                </div>
              ))}
            </div>
            <Button className="w-full mt-2">Save</Button>
          </PopoverContent>
        </Popover>
      </div>
      <Separator className="my-2" />
      <div className="flex items-center justify-between relative">
        <div className="flex flex-col">
          <p>Mute Mode</p>
          <p className="text-xs text-muted-foreground ">
            Disable all sounds in the app
          </p>
        </div>
        <Switch />
      </div>
    </div>
  );
};
