import { RouterProvider } from "@tanstack/react-router";
import { createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";

import { ThemeProvider } from "./components/providers/theme-provider";
import { routeTree } from "./routeTree.gen";

// Set up a Router instance
const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	scrollRestoration: true,
});

// Register things for typesafety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export function App() {
	return (
		<StrictMode>
			<ThemeProvider defaultTheme="dark" storageKey="simple-char-ui-theme">
				<RouterProvider router={router} />
			</ThemeProvider>
		</StrictMode>
	);
}
