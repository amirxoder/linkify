import { Button } from "@/components/ui/button";
import { FaGoogle, FaGithub } from "react-icons/fa";
export const Social = () => {
  return (
    <div className="grid grid-cols-2 w-full gap-1">
      <Button variant={"secondary"}>
        <span>Sign in with Google</span>
        <FaGoogle />
      </Button>
      <Button variant={"secondary"}>
        <span>Sign in with Github</span>
        <FaGithub />
      </Button>
    </div>
  );
};
