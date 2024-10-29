"use server";

export async function handleForm(prevState: unknown, formData: FormData) {
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("running", formData);

  return {
    errors: ["Invalid email or password", "Invalid email or password 2"],
  };
}
