"use server";

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX } from "@/lib/constants";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z
    .string({ required_error: "Password is required" })
    .min(PASSWORD_MIN_LENGTH)
    .regex(PASSWORD_REGEX, "Password is too weak"),
});

export async function handleForm(prevState: unknown, formData: FormData) {
  const data = {
    email: String(formData.get("email")) || "",
    password: String(formData.get("password")) || "",
  };

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
