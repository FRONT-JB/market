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
        <FormInput type="text" placeholder="Username" required errors={[]} />
        <FormInput type="email" placeholder="Email" required errors={[]} />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="Confirm password"
          required
          errors={[]}
        />

        <FormButton label="Create account" />
      </form>

      <div className="w-full h-px bg-neutral-500" />

      <SocialLoginButton />
    </div>
  );
}
