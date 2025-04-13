import { useForm } from "react-hook-form";

export const useLogInForm = () => {
    return useForm({
        reValidateMode: "onSubmit",
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onSubmit",
    });
};
