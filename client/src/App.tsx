import { type FC } from "react";
import AppRouter from "./AppRouter";
import Modals from "./components/Modal/Modals";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useActions } from "./hooks/useActions";

const App: FC = () => {
	const { setLanguage } = useActions();

	useLocalStorage<"ru" | "en" | null>("language", setLanguage);

	return (
		<>
			<AppRouter />
			<Modals />
		</>
	);
};

export default App;
