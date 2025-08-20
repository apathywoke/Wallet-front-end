import * as yup from "yup";
import { emailRule, passwordRule } from "@/shared/lib/validation/authRules.ts";

export const signUpSchema = yup.object({
  email: emailRule,
  password: passwordRule,
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});