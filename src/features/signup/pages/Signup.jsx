import { useSignup } from "../hooks/useSignup";
import { useSignupForm } from "../hooks/useSignupForm";

import { useIcon } from "../../../hooks/useIcon";
import { useIconForm } from "../../../hooks/useIconForm";
import { FormInput } from "../../../components/FormInput";
import { validationRules } from "../../../utils/validationRule";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Signup() {
	const {
		register,
		handleSubmit: handleSignupSubmit,
		formState: { errors },
	} = useSignupForm();

	const {
		register: iconRegister,
		handleSubmit: handleIconSubmit,
		formState: { errors: iconErrors },
	} = useIconForm();

	const { signup, error, loading, token } = useSignup();
	const { handleFileChange, upload, iconError, setIconError, iconLoading } =
		useIcon(token);
	const [isUploadSuccess, setUploadSuccess] = useState(false);

	const onSubmit = async (formData) => {
		await signup(formData);
	};

	const navigate = useNavigate();
	const onSubmitIcon = async () => {
		try {
			await upload();
			setUploadSuccess(true);
		} catch (e) {
			console.error(e);
		}
	};
	useEffect(() => {
		if (isUploadSuccess && !iconError) {
			navigate("/books");
		}
	}, [isUploadSuccess, iconError, navigate]);

	return (
		<div className="flex justify-center items-center min-h-screen">
			<div className="w-full max-w-sm space-y-4">
				<form onSubmit={handleSignupSubmit(onSubmit)}>
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
					{error && !token && (
						<p className="text-red-500 text-sm">
							{error.response?.data?.ErrorMessageJP || "エラーが発生しました"}
						</p>
					)}
					{token && (
						<p className="text-green-500 text-sm">登録に成功しました！</p>
					)}

					{!token && (
						<button
							type="submit"
							className="w-full py-2 mt-2 bg-blue-500 text-white rounded"
							disabled={loading}
						>
							次へ
						</button>
					)}
				</form>

				<form onSubmit={handleIconSubmit(onSubmitIcon)}>
					{token && (
						<FormInput
							label="アイコン"
							id="icon"
							type="file"
							onChange={handleFileChange}
							register={iconRegister}
							validation={validationRules.icon}
							error={iconErrors.icon?.message}
						/>
					)}
					{iconLoading && <p className="text-gray-500 text-sm">送信中...</p>}
					{iconError && (
						<p className="text-red-500 text-sm">
							{iconError.response?.data?.ErrorMessageJP ||
								"エラーが発生しました"}
						</p>
					)}
					{token && (
						<button
							type="submit"
							className="w-full py-2 mt-2 bg-blue-500 text-white rounded"
							disabled={iconLoading}
							onClick={() => setIconError(null)}
						>
							登録
						</button>
					)}
				</form>

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
