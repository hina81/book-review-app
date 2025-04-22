import { useState } from "react";
import axios from "axios";

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [token, setToken] = useState(null);

	const signup = async (formData) => {
		setLoading(true);
		try {
			const response = await axios.post(
				"https://railway.bookreview.techtrain.dev/users",
				formData,
			);
			setToken(response.data.token);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	return { signup, error, loading, token };
};
