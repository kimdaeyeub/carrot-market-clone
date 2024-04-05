"use server";

export const handleForm = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(formData.get("email"), formData.get("password"));
  return {
    errors: ["Wrong password", "Password too short"],
  };
};
