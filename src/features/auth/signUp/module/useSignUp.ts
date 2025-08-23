import { useMutation } from "@tanstack/react-query";
import { register, RegisterDto } from "../api/register";

export const useSignUp = () => {
  return useMutation({
    mutationFn: (data: RegisterDto) => register(data),
    onSuccess: () => {
      // например, редирект на страницу логина
      console.log('✅ Registration successful');
    },
    onError: (error: string) => {
      console.error('❌ Registration failed', error);
    },
  });
};
