"use client";

import FormButton from "@/components/form/form-button";
import FormInput from "@/components/form/form-input";

import { handleForm } from "./actions";
import { useActionState } from "react";
import SocialLoginButton from "@/components/button/social-login-button";

export default function Login() {
  const [state, formAction] = useActionState(handleForm, {
    potato: 1,
  } as any);

  console.log(state);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>

        <h2 className="text-xl">Login to your account</h2>
      </div>

      <form action={formAction} className="flex flex-col gap-3">
        <FormInput name="email" type="email" placeholder="Email" required />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <FormButton label="Login" />
      </form>

      <div className="w-full h-px bg-neutral-500" />

      <SocialLoginButton />
    </div>
  );
}
