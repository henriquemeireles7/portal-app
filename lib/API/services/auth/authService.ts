import { UserAPISchemaType } from "@/lib/API/schemas/userSchema";
import { LoginSchemaType } from "@/lib/API/schemas/login";

class AuthService {
  async register(userData: UserAPISchemaType) {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Registration failed");
    }

    return data;
  }

  async login(credentials: LoginSchemaType) {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Login failed");
    }

    return data;
  }
}

export const authService = new AuthService();
