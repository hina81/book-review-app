const ReviewCard = ({ id, title, url, detail, review, reviewer }) => {
	return (
		<div className="max-w-xl w-full bg-white shadow-md rounded-2xl p-6 space-y-4 border border-gray-200">
			<div className="flex flex-col space-y-1">
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-xl font-bold text-blue-600 hover:underline"
				>
					{title}
				</a>
				<p className="text-sm text-gray-500">ID: {id}</p>
			</div>

			<p className="text-gray-700 text-base">{detail}</p>

			<div className="bg-gray-100 rounded-xl p-4">
				<p className="text-sm text-gray-600 mb-2">レビュー</p>
				<p className="text-gray-800">{review}</p>
			</div>

			<div className="text-right text-sm text-gray-500">- {reviewer}</div>
		</div>
	);
};

export default ReviewCard;
