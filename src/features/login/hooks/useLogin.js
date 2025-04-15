import { useState } from "react";
import axios from "axios";

export const useLogin = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [token, setToken] = useState(null);

	const login = async (formData) => {
		setLoading(true);
		try {
			const response = await axios.post(
				"https://railway.bookreview.techtrain.dev/signin",
				formData,
			);
			setData(response.data);
			setToken(response.data.token);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	return { login, data, error, loading, token };
};
