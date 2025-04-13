import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import Index from "../pages/Index";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/login" element={<Login />} />
				<Route path="books" element={<Index />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
