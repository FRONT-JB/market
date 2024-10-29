"use client";

import SocialLoginButton from "@/components/button/social-login-button";
import FormButton from "@/components/form/form-button";
import FormInput from "@/components/form/form-input";

import { createAccount } from "./actions";
import { useActionState } from "react";

export default function CreateAccount() {
  const [state, formAction] = useActionState(createAccount, null);

  console.log(state);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>

        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>

      <form action={formAction} className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors?.username}
        />

        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors?.email}
        />

        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors?.password}
        />

        <FormInput
          name="passwordConfirm"
          type="password"
          placeholder="Confirm password"
          required
          errors={state?.fieldErrors?.passwordConfirm}
        />

        <FormButton label="Create account" />
      </form>

      <div className="w-full h-px bg-neutral-500" />

      <SocialLoginButton />
    </div>
  );
}
