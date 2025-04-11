export default function SignIn() {
	return (
		<>
			<div className="flex justify-center items-center min-h-screen">
				<div className="</div>">
					<div className="text-xl font-bold text-center">サインイン</div>
					<form className="w-full max-w-sm space-y-4">
						<label for="email">メールアドレス</label>
						<input
							type="email"
							name="email"
							className="w-full px-3 py-2 border rounded"
							placeholder="example@email.com"
						/>
						<label for="password">パスワード</label>
						<input
							type="password"
							name="password"
							className="w-full px-3 py-2 border rounded"
							placeholder="password"
						/>
						<button
							type="submit"
							className="w-full py-2 bg-blue-500 text-white rounded"
						>
							サインイン
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
