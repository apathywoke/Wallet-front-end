import { apiInstance } from "@/shared/api/base";

export interface RegisterDto {
  email: string;
  password: string;
  confirmPassword: string;
}

export const register = async (data: RegisterDto) => {
  const response = await apiInstance.post("/auth/register", data);
  return response.data;
};