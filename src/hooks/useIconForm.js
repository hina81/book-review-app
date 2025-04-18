import { useForm } from "react-hook-form";

export const useIconForm = () => {
	return useForm({
		reValidateMode: "onSubmit",
		defaultValues: {
			icon: "",
		},
		mode: "onSubmit",
	});
};
