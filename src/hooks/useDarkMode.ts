import { useState } from "react";


/**
 * 
 * @param defaultMode default value if the user go to our app for the first time 
 * 
 * true = darkTheme, false = lightTheme
 * 
 * @example const [theme, themeToggler] = useDarkMode(true);
 * Enable Dark Mode at first app loading
 * 
 * @return Return a Hook with [theme, themeToggler]. 
 * 
 * theme = a boolean true or false \
 * themeToogler = a function which allow to switch from dark theme to light theme
 * 
 * Note: A "ThemeProvider" must be providen 
 */

export default function useDarkMode(defaultMode: boolean) {

	if (localStorage.getItem('dark')) {
		const checkLocalStorage = localStorage.getItem('dark');
		checkLocalStorage === "true" ? defaultMode = true : defaultMode = false;
	}

	const [darkMode, setDarkMode] = useState(defaultMode);

	const themeToggler = () => {
		darkMode === false ? setDarkMode(true) : setDarkMode(false);
		darkMode === false ? localStorage.setItem('dark', "true") : localStorage.setItem('dark', "false");
	};

	return [
		darkMode,
		themeToggler,
	] as const;
}