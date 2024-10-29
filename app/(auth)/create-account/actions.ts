"use server";

import { z } from "zod";

const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
);

const checkUsername = (username: string) => {
  return !username.includes("potato");
};

const checkPassword = ({
  password,
  passwordConfirm,
}: {
  password: string;
  passwordConfirm: string;
}) => password === passwordConfirm;

const formSchema = z
  .object({
    username: z
      .string()
      .min(3)
      .max(10)
      .trim()
      .refine(checkUsername, "Username cannot include 'potato'"),
    email: z.string().email(),
    password: z.string().min(10).regex(passwordRegex, "Password is too weak"),
    passwordConfirm: z
      .string()
      .min(10)
      .regex(passwordRegex, "Password is too weak"),
  })
  .refine(checkPassword, {
    path: ["passwordConfirm"],
    message: "Both passwords should be same",
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: String(formData.get("username")) || "",
    email: String(formData.get("email")) || "",
    password: String(formData.get("password")) || "",
    passwordConfirm: String(formData.get("passwordConfirm")) || "",
  } satisfies z.input<typeof formSchema>;

  const result = formSchema.safeParse(data);

  if (!result.success) {
    return {
      values: data,
      fieldErrors: result.error.flatten().fieldErrors,
    };
  } else {
    return { values: data };
  }
}
