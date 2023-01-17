export interface User {
  id?: string;
  userName?: string;
  password?: string;
  role?: string;
}

export interface LoginUser {
  enteredUserName?: string;
  enteredPassword?: string;
}
