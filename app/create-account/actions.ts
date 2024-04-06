"use server";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("potato");

const checkPassword = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "유저네임은 문자만 가능합니다.",
        required_error: "유저네임은 필수 항목입니다.",
      })
      .min(3, "유저네임의 길이가 너무 짧습니다.")
      .max(10, "유저네임의 길이가 너무 깁니다.")
      .refine(checkUsername, "Potatoes not allowed"),
    email: z.string().email(),
    password: z.string().min(10),
    confirm_password: z.string().min(10),
  })
  .refine(checkPassword, {
    path: ["confirm_password"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export const createAccount = async (prevState: any, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
};
