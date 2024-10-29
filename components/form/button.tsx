"use client";

import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
}

export default function Button({
  label,
  className,
  disabled = false,
  ...restProps
}: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed ${className}`}
      disabled={disabled || pending}
      {...restProps}
    >
      {pending ? "Loading..." : label}
    </button>
  );
}
