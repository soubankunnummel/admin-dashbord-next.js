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

  export interface Profile {
    username: string;
    email: string;
    phone: string;
    password: string;
  }

  export interface CustomError extends Error {
    response?: {
      data?: {
        message?: string;
      };
    };
  }