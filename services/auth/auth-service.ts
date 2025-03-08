
import api from "@/lib/axios";
import { User } from "@/types/user";

// export default register;

const authService = {
  register: async (data: User) => {
    const response = await api.post(`/register`, data);
    return response.data;
  },

  login: async (data: User) => {
    const response = await api.post(`/login`, data);
    return response.data;
  },
};
export default authService;
