import { type FC } from "react";
import AppRouter from "./AppRouter";
import Modals from "./components/Modal/Modals";

/*
	<Continue.Here4/>
	= u legend, bruh! u finally complete this auth pages, I'm shocked!
	= in the sequel we need to start utils, I think should be
	= on the first make sidebar, still be so cool, bruh, good luck u!
	= 27.03.2026 23:43
*/

const App: FC = () => {
	return (
		<>
			<AppRouter />
			<Modals />
		</>
	);
};

export default App;
