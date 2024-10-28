import { ButtonHTMLAttributes } from "react";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode;
  isLoading?: boolean;
}

export default function FormButton({
  label,
  className,
  isLoading = false,
  ...restProps
}: FormButtonProps) {
  return (
    <button
      className={`primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed ${className}`}
      {...restProps}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
}
