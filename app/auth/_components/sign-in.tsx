"use client";
import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema } from "@/lib/validation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { PiSignInBold } from "react-icons/pi";
import { useAppDispatch } from "@/lib/hook";
import { setAuthState, setEmail } from "@/lib/features/auth/authSlice";

export default function SignIn() {
  const dispatch = useAppDispatch();

  const from = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = ({ email }: z.infer<typeof emailSchema>) => {
    dispatch(setEmail(email));
    dispatch(setAuthState("verify"));
  };

  return (
    <div>
      <p className="text-center text-muted-foreground text-sm">
        A simple and fast Messenger web app with focus on speed and security
      </p>
      <Form {...from}>
        <form onSubmit={from.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={from.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="py-5"
                    placeholder="info@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full py-5">
            <span>Sign in</span>
            <PiSignInBold />
          </Button>
        </form>
      </Form>
    </div>
  );
}
