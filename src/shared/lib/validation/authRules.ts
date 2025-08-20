import * as yup from "yup";

export const emailRule = yup.string().email("Invalid email").required("Email is required");
export const passwordRule = yup.string().min(6, "Password must be at least 6 characters").required("Password is required");