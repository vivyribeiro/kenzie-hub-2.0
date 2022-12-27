import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useUserContext } from "../../contexts/UserContext";

import LoaderPage from "../LoaderPage";

const ProtectedRoutes = () => {
	const { user, globalLoading } = useUserContext();
	const location = useLocation();

	if (globalLoading) {
		return <LoaderPage />;
	}

	return user ? (
		<Outlet />
	) : (
		<Navigate to="/" replace state={{ from: location }} />
	);
};

export default ProtectedRoutes;
