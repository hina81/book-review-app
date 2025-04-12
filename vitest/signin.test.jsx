import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import SignIn from "../src/pages/SignIn";

test("ログインフォームが描画されている", () => {
	// signInをレンダリング
	render(<SignIn />);
	screen.debug();
	// テスト
	expect(screen.getByRole("textbox")).toBeTruthy();
	expect(screen.getByRole("button")).toBeTruthy();
	expect(screen.getByLabelText("メールアドレス")).toBeTruthy();
	expect(screen.getByLabelText("パスワード")).toBeTruthy();
	expect(screen.getByText("サインイン")).toBeInTheDocument();
});
