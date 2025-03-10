import api from "@/lib/axios";
import { User } from "@/types/user";


export const userService = {

    update: async (data: User) => {
        const response = await api.put(`/update`, data);
        return response.data;
    },
}