import { useUploadIcon } from "../hooks/useUploadIcon";

export const UploadIcon = ({ token }) => {
	const { handleFileUpload, error, data, loading } = useUploadIcon(token);
	return (
		<>
			<label htmlFor="icon" className="block text-sm mb-1">
				アイコン
			</label>
			<input
				id="icon"
				type="file"
				className="w-full px-3 py-2 border rounded"
				onChange={handleFileUpload}
			/>
			{loading && (
				<p className="text-blue-500 text-sm mt-1">アップロード中...</p>
			)}
			{error && (
				<p className="text-red-500 text-sm">
					{error.response?.data?.ErrorMessageJP || "エラーが発生しました"}
				</p>
			)}
			{data?.url && (
				<div className="mt-2">
					<p className="text-green-600 text-sm">アップロード成功！</p>
					<img
						src={data.url}
						alt="アップロードされたアイコン"
						className="mt-1 w-24 h-24 rounded-full object-cover"
					/>
				</div>
			)}
		</>
	);
};
