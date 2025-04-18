import { useEffect, useState } from "react";
import axios from "axios";

export const useGetBooks = () => {
	const [books, setBooks] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	// const [token, setToken] = useState(null);

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const response = await axios.get(
					"https://railway.bookreview.techtrain.dev/public/books?offset=20",
				);
				setBooks(response.data);

				// setToken(response.data.token);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	return { books, error, loading };
};
