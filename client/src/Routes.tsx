import { Navigate } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

type AppRouteNames = "redirection" | "signin" | "signup";

export interface AppRoute {
	path: string;
	element: React.ReactElement;
	name: AppRouteNames;
	group?: string;
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
		group: "auth",
		element: <SignIn />,
	},
	SIGN_UP: {
		path: "/signup",
		name: "signup",
		group: "auth",
		element: <SignUp />,
	},
};
