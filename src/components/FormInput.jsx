export const FormInput = ({
	label,
	id,
	placeholder,
	error,
	type = "text",
	register,
	validation,
	onChange,
}) => (
	<div>
		<label htmlFor={id} className="block text-sm mb-1">
			{label}
		</label>
		<input
			id={id}
			type={type}
			{...(type === "file" ? { onChange } : register(id, validation))}
			placeholder={placeholder}
			className="w-full px-3 py-2 border rounded"
		/>
		{error && <p className="text-red-500 text-sm">{error}</p>}
	</div>
);
