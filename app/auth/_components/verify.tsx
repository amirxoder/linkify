"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useAppSelector } from "@/lib/hook";

import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export const Verify = () => {
  const { email } = useAppSelector((state) => state.auth);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: "",
      email: email,
    },
    mode: "onChange",
  });

  const onSubmit = (value: z.infer<typeof FormSchema>) => {
    console.log("Form is being submitted...");
    console.log("Submitted Value:", value);
  };
  return (
    <div className="w-full ">
      <p className="text-center text-muted-foreground text-sm">
        We have sent an email to verify your account. Please enter the code
        below
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6 flex flex-col  items-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="py-6 "
                    placeholder="info@example.com"
                    {...field}
                    value={email}
                    disabled
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className=" flex flex-col items-center gap-y-3 mt-2">
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    {...field}
                    pattern={REGEXP_ONLY_DIGITS}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} className="p-6 text-lg" />
                      <InputOTPSlot index={1} className="p-6 text-lg" />
                      <InputOTPSlot index={2} className="p-6 text-lg" />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} className="p-6 text-lg" />
                      <InputOTPSlot index={4} className="p-6 text-lg" />
                      <InputOTPSlot index={5} className="p-6 text-lg" />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Please enter the one-time password sent to your phone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};
