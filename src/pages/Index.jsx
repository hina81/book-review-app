import React from "react";
import { useGetBooks } from "../features/books/hooks/useGetBooks";
import ReviewCard from "../features/books/components/reviewCard";

const Index = () => {
	const { books } = useGetBooks();
	return (
		<div>
			<div className="min-h-screen bg-gray-50 py-10 px-4">
				<h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
					書籍レビュー一覧
				</h1>
				<div className="flex flex-col items-center space-y-6">
					{books.map((book) => (
						<ReviewCard key={book.id} {...book} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Index;
