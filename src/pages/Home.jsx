import { Link } from "react-router";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<h1 className="text-xl font-semibold mb-6">書籍レビューアプリ</h1>
			<div className="space-y-4">
				<Link
					to="/signin"
					className="inline-block px-6 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
				>
					新規登録
				</Link>
				<Link
					to="/login"
					className="inline-block px-6 py-2 ml-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition"
				>
					ログイン
				</Link>
			</div>
		</div>
	);
}
