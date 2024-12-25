import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon } from "lucide-react";
export const Settings = () => {
  return (
    <Button variant={"secondary"} size={"icon"}>
      <SettingsIcon />
    </Button>
  );
};
