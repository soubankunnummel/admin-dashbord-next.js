export interface User {
    username?: string;
    email?: string;
    phone?: string;
    password: string;
    confirm_password?: string;
 
  }

  export interface AuthResponse {
    data: {
      username: string;
    };
    accessToken: string;
  }