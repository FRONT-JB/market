"use server";

import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

const phoneSchema = z
  .string()
  .trim()
  .refine(validator.isMobilePhone, "Wrong phone format");

const codeSchema = z.coerce.number().min(100000).max(999999);

interface ActionState {
  token: boolean;
  phone: string;
  code: string;
  error?: string[];
}

export type { ActionState };

export async function smsVerify(prevState: ActionState, formData: FormData) {
  const phone = formData.get("phone");
  const code = formData.get("code");

  console.log(phone);

  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);

    if (!result.success) {
      return {
        token: false,
        phone: phone as ActionState["phone"],
        code: code as ActionState["code"],
        error: result.error.flatten().formErrors,
      };
    } else {
      return {
        token: true,
        phone: phone as ActionState["phone"],
        code: code as ActionState["code"],
      };
    }
  } else {
    const result = codeSchema.safeParse(code);

    if (!result.success) {
      return {
        token: true,
        phone: phone as ActionState["phone"],
        code: code as ActionState["code"],
        error: result.error.flatten().formErrors,
      };
    } else {
      redirect("/");
    }
  }
}
