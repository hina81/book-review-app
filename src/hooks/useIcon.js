import { useState } from "react";
import axios from "axios";
import Compressor from "compressorjs";

export const useIcon = (token) => {
	const [file, setFile] = useState(null);
	const [iconData, setIconData] = useState(null);
	const [iconError, setIconError] = useState(null);
	const [iconLoading, setIconLoading] = useState(false);

	const handleFileChange = (e) => {
		const selectedFile = e.target.files?.[0];
		setFile(selectedFile);
	};

	const upload = async () => {
		setIconLoading(true);
		try {
			const compressedFile = await compressImage(file);
			const formData = new FormData();
			formData.append("icon", compressedFile, compressedFile.name);

			const response = await axios.post(
				"https://railway.bookreview.techtrain.dev/uploads",
				formData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);
			setIconData(response.data);
		} catch (err) {
			setIconError(err);
		} finally {
			setIconLoading(false);
		}
	};

	const compressImage = (file) =>
		new Promise((resolve, reject) => {
			new Compressor(file, {
				quality: 0.6,
				success(result) {
					resolve(result);
				},
				error(err) {
					reject(err);
				},
			});
		});

	return {
		handleFileChange,
		upload,
		iconError,
		iconData,
		iconLoading,
		setIconError,
	};
};
