import { prisma } from "@/lib/API/services/init/prisma";
import bcrypt from "bcryptjs";

export async function registerUser(email: string, password: string, name?: string) {
  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || null,
      },
    });

    return { success: true, user };
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}