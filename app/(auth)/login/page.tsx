"use client";

import Button from "@/components/form/button";
import Input from "@/components/form/input";

import { handleForm } from "./actions";
import { useActionState } from "react";
import SocialLoginButton from "@/components/button/social-login-button";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function Login() {
  const [state, formAction] = useActionState(handleForm, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>

        <h2 className="text-xl">Login to your account</h2>
      </div>

      <form action={formAction} className="flex flex-col gap-3">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          defaultValue={state?.values?.email}
          errors={state?.fieldErrors?.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          defaultValue={state?.values?.password}
          errors={state?.fieldErrors?.password}
        />

        <Button label="Login" />
      </form>

      <div className="w-full h-px bg-neutral-500" />

      <SocialLoginButton />
    </div>
  );
}
