import type { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence as AP } from "framer-motion";
import { AppRoutes } from "./Routes";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

const AppRouter: FC = () => {
	const location = useLocation();

	const routes = Object.values(AppRoutes);
	const authRoutes = routes.filter((route) => route.group === "auth");
	const otherRoutes = routes.filter((route) => route.group === undefined);

	return (
		<>
			<AP mode="wait" initial={false}>
				<Routes key={location.pathname} location={location}>
					<Route element={<MainLayout />}>
						{otherRoutes.map((route, index) => (
							<Route index={route.isIndex} key={index} path={route.path} element={route.element} />
						))}
						<Route element={<AuthLayout />}>
							{authRoutes.map((route, index) => (
								<Route index={route.isIndex} key={index} path={route.path} element={route.element} />
							))}
						</Route>
					</Route>
				</Routes>
			</AP>
		</>
	);
};

export default AppRouter;
