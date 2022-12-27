import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "../components/ProtectedRoutes";

const MainRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/">
					<Route index element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route element={<ProtectedRoutes />}>
						<Route path="dashboard" element={<Dashboard />} />
					</Route>
				</Route>

				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};

export default MainRoutes;
