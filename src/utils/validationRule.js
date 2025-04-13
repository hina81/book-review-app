export const validationRules = {
	lastName: {
		required: "姓を入力してください",
		minLength: { value: 2, message: "2文字以上で入力してください" },
	},
	firstName: {
		required: "名を入力してください",
	},
	email: {
		required: "メールアドレスを入力してください",
	},
	password: {
		required: "パスワードを入力してください",
		minLength: { value: 6, message: "6文字以上で入力してください" },
	},
};
