import * as z from "zod";

export const emailSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  oldEmail: z.string().email({
    message: "Please enter a valid email address",
  }),
});

export const oldEmailSchema = z.object({}).merge(emailSchema);

export const otpSchema = z
  .object({
    otp: z.string().min(6, {
      message: "Please enter a valid OTP",
    }),
  })
  .merge(emailSchema);

export const messageSchema = z.object({
  message: z.string().min(1, {
    message: "Message cannot be empty.",
  }),

  image: z.string().optional(),
});

export const profileSchema = z.object({
  firstName: z
    .string({ message: "First name is required" })
    .min(2, { message: "First name must be at least 2 characters long" }),
  lastName: z.string().optional(),
  bio: z.string().optional(),
});

export const verifySchema = z.object({}).merge(emailSchema);

export const confirmTextSchema = z
  .object({
    confirmText: z.string().min(1, {
      message: "Please enter the confirmation text",
    }),
  })
  .refine((data) => data.confirmText === "DELETE", {
    message: "Confirmation text must be DELETE",
    path: ["confirmText"],
  });
