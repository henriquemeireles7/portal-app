import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import type { User, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

interface Credentials {
  email: string;
  password: string;
}

/**
 * Gets a user from the database by email
 */
async function getUserByEmail(email: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: { email },
  });
}

/**
 * Verifies user credentials and returns the user if valid
 */
export async function verifyCredentials(
  credentials: Credentials
): Promise<User> {
  // Input validation
  if (!credentials?.email || !credentials?.password) {
    throw new Error("Email and password are required");
  }

  // Get user from database
  const user = await getUserByEmail(credentials.email);

  // Check if user exists
  if (!user || !user.password) {
    throw new Error("Invalid credentials");
  }

  // Verify password
  const isValidPassword = bcrypt.compareSync(credentials.password, user.password);

  if (!isValidPassword) {
    throw new Error("Invalid credentials");
  }

  return user;
}

/**
 * Creates a new user in the database
 */
export async function createUser(userData: {
  email: string;
  password: string;
}): Promise<User> {
  // Check if user already exists
  const existingUser = await getUserByEmail(userData.email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Create new user with type-safe data
  const userCreateInput: Prisma.UserCreateInput = {
    email: userData.email,
  };

  // Create new user
  const user = await prisma.user.create({
    data: userCreateInput,
  });

  return user;
}

// Clean up Prisma connection when done
process.on("beforeExit", async () => {
  await prisma.$disconnect();
});
