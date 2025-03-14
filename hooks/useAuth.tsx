import authService from "@/services/auth/auth-service";
import { AuthResponse, User } from "@/types/user";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useAdminRegister = (): UseMutationResult<AuthResponse, Error, User> => {
    return useMutation({
      mutationKey: ["register"],
      mutationFn: authService.register,
    });
  };

export const useAdminLogin = (): UseMutationResult<AuthResponse, Error, User> => {
    return useMutation({
      mutationKey: ["login"],
      mutationFn: authService.login,
    });
  };
 
