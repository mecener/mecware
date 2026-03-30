import Block from "@/components/Primitives/Block";
import type { FC } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: FC = () => {
	return (
		<Block $height="100%" $column $alignItems="center" $justifyContent="center">
			<Outlet />
		</Block>
	);
};

export default AuthLayout;
