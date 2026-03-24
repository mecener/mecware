import { Navigate } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";

type AppRouteNames = "redirection" | "signin" | "signup";

export interface AppRoute {
	path: string;
	element: React.ReactElement;
	name: AppRouteNames;
	isIndex?: boolean;
	isNavbarRender?: boolean;
}

export const AppRoutes: Record<string, AppRoute> = {
	INDEX: {
		path: "/",
		name: "redirection",
		element: <Navigate to="/signin" replace />,
		isIndex: true,
	},
	SIGN_IN: {
		path: "/signin",
		name: "signin",
		element: <SignIn />,
	},
};
