import axios from "axios";
import Compressor from "compressorjs";
import { useState } from "react";
export const useUploadIcon = (token) => {
	const [iconData, setData] = useState(null);
	const [iconError, setError] = useState(null);
	const [iconLoading, setLoading] = useState(false);

	const handleFileUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file || !token) {
			console.error("ファイルまたはトークンがありません");
			return;
		}

		// 画像ファイルの拡張子チェック
		const allowedExtensions = ["jpg", "png"];
		const fileExtension = file.name.split(".").pop()?.toLowerCase();
		if (!allowedExtensions.includes(fileExtension)) {
			alert("画像ファイルはJPGまたはPNGのみです");
			return;
		}

		// ファイルサイズチェック（1MB以下）
		const maxSize = 1 * 1024 * 1024;
		if (file.size > maxSize) {
			// 1MB
			alert("ファイルサイズは1MB以下でなければなりません");
			return;
		}

		setLoading(true);

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
			setData(response.data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	const compressImage = (file) => {
		return new Promise((resolve, reject) => {
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
	};
	return {
		handleFileUpload,
		iconError,
		iconData,
		iconLoading,
	};
};
