import { FormInput } from "../components/FormInput";
import { useSignin } from "../features/signin/hooks/useSignin";
import { useSignInForm } from "../features/signin/hooks/useSignInForm";
import { validationRules } from "../utils/validationRule";
import { Link } from "react-router-dom";
import { UploadIcon } from "../components/UploadIcon";
import { useUploadIcon } from "../hooks/useUploadIcon";

export default function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useSignInForm();

	const { signin, data, error, loading, token } = useSignin();
	const { iconError, iconLoading } = useUploadIcon();

	const onSubmit = async (formData) => {
		await signin(formData);
	};

	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="w-full max-w-sm space-y-4">
				<form onSubmit={handleSubmit(onSubmit)}>
					<h2 className="flex justify-center">新規登録</h2>

					<FormInput
						label="名前"
						id="name"
						placeholder="山田 太郎"
						register={register}
						validation={validationRules.name}
						error={errors.name?.message}
					/>

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

					{loading && <p className="text-gray-500 text-sm">送信中...</p>}
					{error && (
						<p className="text-red-500 text-sm">
							{error.response?.data?.ErrorMessageJP || "エラーが発生しました"}
						</p>
					)}
					{data && (
						<p className="text-green-500 text-sm">登録に成功しました！</p>
					)}

					{/* dataがある時ボタンは非表示 */}
					{!data && (
						<button
							type="submit"
							className="w-full py-2 mt-2 bg-blue-500 text-white rounded"
							disabled={loading}
						>
							次へ
						</button>
					)}
				</form>

				{/* tokenがある時表示 */}
				{token && <UploadIcon token={token} />}
				{token && (
					<Link
						to="/books"
						className="w-full py-2 mt-2 bg-blue-500 text-white rounded block text-center"
					>
						登録
					</Link>
				)}

				{iconLoading && <p className="text-gray-500 text-sm">送信中...</p>}
				{iconError && (
					<p className="text-red-500 text-sm">
						{iconError.response?.data?.ErrorMessageJP || "エラーが発生しました"}
					</p>
				)}
				<Link
					to="/login"
					className="text-gray-500 hover:text-gray-700 text-sm flex justify-center"
				>
					ログイン
				</Link>
			</div>
		</div>
	);
}
