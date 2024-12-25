import * as z from "zod";

export const emailSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});

export const otpSchema = z
  .object({
    otp: z.string().min(6, {
      message: "Please enter a valid OTP",
    }),
  })
  .merge(emailSchema);
