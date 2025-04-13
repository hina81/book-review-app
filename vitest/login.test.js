import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "../src/pages/Login";

test("ログインフォームが描画されている", () => {
	render(<Login />);
	screen.debug();
	// テスト
	expect(screen.getByRole("textbox")).toBeTruthy();
	expect(screen.getByRole("button")).toBeTruthy();
	expect(screen.getByLabelText("メールアドレス")).toBeTruthy();
	expect(screen.getByLabelText("パスワード")).toBeTruthy();
	expect(screen.getByText("ログイン")).toBeInTheDocument();
});
