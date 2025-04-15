import { useForm } from "react-hook-form";

export const useSignInForm = () => {
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
