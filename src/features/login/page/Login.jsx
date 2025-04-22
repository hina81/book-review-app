import { Link, useNavigate } from "react-router";
import { useLogin } from "../hooks/useLogin";
import { useLogInForm } from "../hooks/useLogInForm";
import { useEffect } from "react";
import { FormInput } from "../../../components/FormInput";
import { validationRules } from "../../../utils/validationRule";

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useLogInForm();

	const { login, data, error, loading } = useLogin();
	const navigate = useNavigate();

	useEffect(() => {
		if (data) {
			navigate("/books");
		}
	}, [data, navigate]); // dataが更新されたら遷移

	const onSubmit = async (formData) => {
		await login(formData);
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
					name="email"
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
					name="password"
					type="password"
					placeholder="password"
					register={register}
					validation={validationRules.password}
					error={errors.password?.message}
				/>

				{loading && <p className="text-gray-500 text-sm">送信中...</p>}
				{error && (
					<p className="text-red-500 text-sm">
						{error.response?.data?.ErrorMessageJP || "エラーが発生しました"}
					</p>
				)}
				{data && (
					<p className="text-green-500 text-sm">ログインに成功しました！</p>
				)}

				<button
					type="submit"
					className="w-full py-2 bg-blue-500 text-white rounded"
				>
					ログイン
				</button>
				<Link
					to="/signup"
					className="text-gray-500 hover:text-gray-700 text-sm flex justify-center"
				>
					新規登録
				</Link>
			</form>
		</div>
	);
}
