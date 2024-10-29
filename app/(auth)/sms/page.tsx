"use client";

import Button from "@/components/form/button";
import Input from "@/components/form/input";
import { useActionState } from "react";
import { ActionState, smsVerify } from "./actions";

const initialState: ActionState = {
  token: false,
  phone: "",
  code: "",
  error: undefined,
};

export default function SMSLogin() {
  const [state, formAction] = useActionState(smsVerify, initialState);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>

        <h2 className="text-xl">Verify your phone number</h2>
      </div>

      <form action={formAction} className="flex flex-col gap-3">
        <Input
          name="phone"
          type="number"
          placeholder="Phone number"
          required
          defaultValue={state?.phone}
          errors={state?.error}
        />

        {state?.token && (
          <Input
            name="code"
            type="number"
            placeholder="Verification code"
            required
            min={100000}
            max={999999}
            errors={state?.error}
          />
        )}

        <Button
          label={state?.token ? "Verify Token" : "Send Verification Code"}
        />
      </form>
    </div>
  );
}
