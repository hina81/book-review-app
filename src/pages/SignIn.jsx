export default function SignIn() {
	return (
		<>
			<div className="flex justify-center items-center min-h-screen">
				<div className="</div>">
					<form className="w-full max-w-sm space-y-4">
						<label htmlFor="email">メールアドレス</label>
						<input
							type="email"
							id="email"
							className="w-full px-3 py-2 border rounded"
							placeholder="example@email.com"
						/>
						<label htmlFor="password">パスワード</label>
						<input
							type="password"
							id="password"
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
