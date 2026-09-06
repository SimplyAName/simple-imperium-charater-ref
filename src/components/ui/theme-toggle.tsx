import { Sun, Moon, Computer } from "lucide-react";

import { useTheme } from "@/components/providers/theme-provider";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// This was yoinked from shadcn directly. Can be replaced later
export function ThemeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div>
					{theme === "light" ? (
						<Sun className="h-4 w-4" />
					) : theme === "dark" ? (
						<Moon className="h-4 w-4" />
					) : theme == "system" ? (
						<Computer className="h-4 w-4" />
					) : null}
					<span className="sr-only">Toggle theme</span>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
