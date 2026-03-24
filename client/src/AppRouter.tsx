import type { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence as AP } from "framer-motion";
import { AppRoutes } from "./Routes";
import MainLayout from "./layouts/MainLayout";

const AppRouter: FC = () => {
	const location = useLocation();

	return (
		<>
			<AP mode="wait" initial={false}>
				<Routes key={location.pathname} location={location}>
					<Route element={<MainLayout />}>
						{Object.values(AppRoutes).map((route, index) => (
							<Route index={route.isIndex} key={index} path={route.path} element={route.element} />
						))}
					</Route>
				</Routes>
			</AP>
		</>
	);
};

export default AppRouter;
