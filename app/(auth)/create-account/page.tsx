"use client";

import SocialLoginButton from "@/components/button/social-login-button";
import Button from "@/components/form/button";
import Input from "@/components/form/input";

import { createAccount } from "./actions";
import { useActionState } from "react";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function CreateAccount() {
  const [state, formAction] = useActionState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>

        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>

      <form action={formAction} className="flex flex-col gap-3">
        <Input
          name="username"
          type="text"
          placeholder="Username"
          required
          defaultValue={state?.values?.username}
          errors={state?.fieldErrors?.username}
        />

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
          defaultValue={state?.values?.password}
          errors={state?.fieldErrors?.password}
          minLength={PASSWORD_MIN_LENGTH}
        />

        <Input
          name="passwordConfirm"
          type="password"
          placeholder="Confirm password"
          required
          defaultValue={state?.values?.passwordConfirm}
          errors={state?.fieldErrors?.passwordConfirm}
          minLength={PASSWORD_MIN_LENGTH}
        />

        <Button label="Create account" />
      </form>

      <div className="w-full h-px bg-neutral-500" />

      <SocialLoginButton />
    </div>
  );
}
