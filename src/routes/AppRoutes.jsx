import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signIn" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
