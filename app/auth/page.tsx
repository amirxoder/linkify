import { RiWechatPayFill } from "react-icons/ri";
import { StateAuth } from "./_components/state-auth";
import { Social } from "./_components/social";
import { ModeToggle } from "@/components/shared/mode-toggle";

export default function Page() {
  return (
    <div className="container max-w-md h-screen flex items-center justify-center flex-col space-y-4 k">
      <div className="text-4xl  font-bold">
        <RiWechatPayFill size={120} className="text-primary" />
        <div className="flex items-center gap-3">
          <h1>Linkify</h1>
          <ModeToggle />
        </div>
      </div>

      <StateAuth />
      <Social />
    </div>
  );
}
