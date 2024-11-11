import { z } from "zod";

// Schema for the registration form (includes confirmPassword)
export const UserSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Please enter an email address" })
      .email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(1, { message: "Please enter a password" })
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password" })
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Schema for API requests (excludes confirmPassword)
export const UserAPISchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter an email address" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(1, { message: "Please enter a password" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
export type UserAPISchemaType = z.infer<typeof UserAPISchema>;
