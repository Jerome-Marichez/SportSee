import { useState } from "react";

export default function useDarkMode() {
	const [darkMode, setDarkMode] = useState(false);

	const themeToggler = () => {
		darkMode === false ? setDarkMode(true) : setDarkMode(false);
	};

	return [
		darkMode,
		themeToggler,
	] as const;
}