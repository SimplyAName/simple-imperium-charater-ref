import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";

import "./index.css";
import { createRoot } from "react-dom/client";

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

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
