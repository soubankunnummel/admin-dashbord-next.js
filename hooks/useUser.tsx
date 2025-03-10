import { userService } from "@/services/user/user-serives";
import { Profile, User } from "@/types/user";
import { useMutation, UseMutationResult } from "@tanstack/react-query";


export const useProfileUpdate = (): UseMutationResult<Profile, Error, User> => {
    return useMutation({
      mutationKey: ["profileUpdate"],
      mutationFn: userService.update ,
    });

}