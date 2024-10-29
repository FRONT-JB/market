import SocialLoginButton from "@/components/button/social-login-button";
import FormButton from "@/components/form/form-button";
import FormInput from "@/components/form/form-input";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>

        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>

      <form className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          required
        />

        <FormInput name="email" type="email" placeholder="Email" required />

        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <FormInput
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          required
        />

        <FormButton label="Create account" />
      </form>

      <div className="w-full h-px bg-neutral-500" />

      <SocialLoginButton />
    </div>
  );
}
