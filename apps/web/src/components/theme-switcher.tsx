import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
	const { setTheme, theme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted || !setTheme) {
		return (
			<Button
				variant="ghost"
				size="icon"
				className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 opacity-0"
				disabled
			>
				<Sun className="h-[1.2rem] w-[1.2rem]" />
			</Button>
		);
	}

	const isDark = theme === "dark";

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50"
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
		>
			<div className="relative">
				<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Moon className="absolute inset-0 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			</div>
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}