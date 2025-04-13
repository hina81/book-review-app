import { FormInput } from "../components/FormInput";
import { useLogInForm } from "../features/login/hooks/useLogInForm";
import { validationRules } from "../utils/validationRule";

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useLogInForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="flex justify-center items-center min-h-screen">
			<form
				className="w-full max-w-sm space-y-4"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h2 className="flex justify-center">ログイン</h2>

				<FormInput
					label="メールアドレス"
					id="email"
					type="email"
					placeholder="example@email.com"
					register={register}
					validation={validationRules.email}
					error={errors.email?.message}
				/>
				<FormInput
					label="パスワード"
					id="password"
					type="password"
					placeholder="password"
					register={register}
					validation={validationRules.password}
					error={errors.password?.message}
				/>
				<button
					type="submit"
					className="w-full py-2 bg-blue-500 text-white rounded"
				>
					ログイン
				</button>
			</form>
		</div>
	);
}
