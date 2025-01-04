import { oldEmailSchema, otpSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

export const EmailForm = () => {
  const [verify, setVerify] = useState(false);

  const emailForm = useForm<z.infer<typeof oldEmailSchema>>({
    resolver: zodResolver(oldEmailSchema),
    defaultValues: {
      oldEmail: "amirold@gmail.co",
      email: "",
    },
  });

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
      email: "",
    },
  });

  const onEmailSumbit = (data: z.infer<typeof oldEmailSchema>) => {
    console.log(data);
    otpForm.setValue("email", data.email);
    setVerify(true);
  };

  const onVerifySumbit = (data: z.infer<typeof otpSchema>) => {
    console.log(data);
  };

  return !verify ? (
    <Form {...emailForm}>
      <form
        onSubmit={emailForm.handleSubmit(onEmailSumbit)}
        className="space-y-4"
      >
        <FormField
          control={emailForm.control}
          name="oldEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="email" disabled />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={emailForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter new email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="email" />
              </FormControl>
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit">
          Verify Email
        </Button>
      </form>
    </Form>
  ) : (
    <Form {...otpForm}>
      <form onSubmit={otpForm.handleSubmit(onVerifySumbit)}>
        <Label>Enter OTP</Label>
        <Input
          className="h-10 bg-secondary"
          disabled
          value={emailForm.watch("email")}
        />
        <FormField
          control={otpForm.control}
          name="otp"
          render={({ field }) => (
            <FormItem className=" flex flex-col items-center gap-y-3 mt-2">
              <FormControl>
                <InputOTP maxLength={6} {...field} pattern={REGEXP_ONLY_DIGITS}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="p-3 text-xs" />
                    <InputOTPSlot index={1} className="p-3 text-xs" />
                    <InputOTPSlot index={2} className="p-3 text-xs" />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} className="p-3 text-xs" />
                    <InputOTPSlot index={4} className="p-3 text-xs" />
                    <InputOTPSlot index={5} className="p-3 text-xs" />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription className="text-xs text-center">
                Please enter the one-time password sent to your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full mt-3" variant={"secondary"} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};
