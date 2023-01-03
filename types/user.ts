export interface User {
  id?: string;
  userName: string;
  password: string;
  role: Role;
}

type Role = "user" | "admin";
