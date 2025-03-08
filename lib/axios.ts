import Axios from "axios";

const api = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2018/api/v1/admin/'}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle specific error codes
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem("token");
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    Promise.reject(error);
  }
);

export default api;
