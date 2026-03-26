import type { FC } from "react";
import { motion as m } from "framer-motion";
import { Outlet } from "react-router-dom";
import Block from "@/components/Primitives/Block";

const MainLayout: FC = () => {
	const transitions = {
		initial: { opacity: 0, y: -10 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -10 },
	};

	return (
		<Block $minHeight="100vh" $justifyContent="center" $column $padding={48}>
			<m.div {...transitions}>
				<Outlet />
			</m.div>
		</Block>
	);
};

export default MainLayout;
