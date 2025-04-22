import { useForm } from "react-hook-form";

export const useSignupForm = () => {
  return useForm({
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });
};
