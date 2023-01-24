import { useState } from "react";

export default function useDarkMode() {
	const [darkMode, setDarkMode] = useState(true);

	const themeToggler = () => {
		darkMode === true ? setDarkMode(false) : setDarkMode(true);
	};

	return [
		darkMode,
		themeToggler,
	] as const;
}