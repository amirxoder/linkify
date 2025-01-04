import { BackgroundBeamsWithCollision } from "@/components/animations/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Input } from "@/components/ui/input";

import { emailSchema } from "@/lib/validation";
import { UseFormReturn } from "react-hook-form";
import { RiWechatPayFill } from "react-icons/ri";
import { z } from "zod";

interface AddContactProps {
  contactForm: UseFormReturn<{ email: string }>;
  onCreateContact: (values: z.infer<typeof emailSchema>) => void;
}

export const AddContact = ({
  contactForm,
  onCreateContact,
}: AddContactProps) => {
  return (
    <BackgroundBeamsWithCollision className="flex items-center justify-center flex-col gap-y-5">
      <div className="flex flex-col items-center">
        <h1 className=" font-bold text-8xl text-center relative  bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 flex items-center gap-3">
          Linkify
          <RiWechatPayFill
            size={40}
            className="text-pink-500 absolute top-[-1rem] right-[-1rem]"
          />
        </h1>
        <p className="text-muted-foreground mt-1">Add contact to start chat</p>
      </div>
      <div className="w-[400px] ">
        <Form {...contactForm}>
          <form
            onSubmit={contactForm.handleSubmit(onCreateContact)}
            className="space-y-4"
          >
            <FormField
              control={contactForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="example@email.com"
                      {...field}
                      className="py-5 rounded-full"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="w-full bg-background flex items-center space-x-2"
            >
              <span>Start Chat</span>
            </HoverBorderGradient>
          </form>
        </Form>
      </div>
    </BackgroundBeamsWithCollision>
  );
};
