import { useForm } from "react-hook-form";

export const useSignInForm = () => {
	return useForm({
		reValidateMode: "onSubmit",
		defaultValues: {
			lastName: "",
			firstName: "",
			email: "",
			password: "",
		},
		mode: "onSubmit",
	});
};
