import { z } from "zod";

export const signInSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Please enter an email address" })
      .email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(1, { message: "Please enter a password" })
      .min(8, { message: "Password must be more than 8 characters" })
      .max(32, { message: "Password must be less than 32 characters" }),
  });

export type SignInSchemaType = z.infer<typeof signInSchema>;
