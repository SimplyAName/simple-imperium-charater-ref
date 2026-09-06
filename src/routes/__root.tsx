import { TanStackDevtools } from "@tanstack/react-devtools";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { tableDevtoolsPlugin } from "@tanstack/react-table-devtools";

import { ThemeToggle } from "@/components/ui/theme-toggle";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<div className="flex min-h-screen flex-col">
			<div className="flex flex-row items-center justify-between px-4">
				<div className="*:border-r-border flex p-2 text-lg *:border-r *:px-2 [&>*:last-child]:border-r-0">
					<Link
						to="/"
						activeProps={{
							className: "font-bold",
						}}
						activeOptions={{ exact: true }}
					>
						Home
					</Link>
					<Link
						to="/character"
						activeProps={{
							className: "font-bold",
						}}
					>
						Character
					</Link>
					<Link
						to="/talents"
						activeProps={{
							className: "font-bold",
						}}
					>
						Talents
					</Link>
					<Link
						to="/augmetics"
						activeProps={{
							className: "font-bold",
						}}
					>
						Augmetics
					</Link>
					<Link
						to="/psykers"
						activeProps={{
							className: "font-bold",
						}}
					>
						Psykers
					</Link>
					<Link
						to="/equipment"
						activeProps={{
							className: "font-bold",
						}}
					>
						Equipment
					</Link>
					<Link
						to="/weapons"
						activeProps={{
							className: "font-bold",
						}}
					>
						Weapons
					</Link>
					<Link
						to="/protection"
						activeProps={{
							className: "font-bold",
						}}
					>
						Protection
					</Link>
					<Link
						to="/combat"
						activeProps={{
							className: "font-bold",
						}}
					>
						Combat
					</Link>
					<Link
						to="/services"
						activeProps={{
							className: "font-bold",
						}}
					>
						Services
					</Link>
					<Link
						to="/about"
						activeProps={{
							className: "font-bold",
						}}
					>
						About
					</Link>
				</div>

				<div className="p-2">
					<ThemeToggle />
				</div>
			</div>
			<hr />
			<Outlet />
			<TanStackDevtools plugins={[tableDevtoolsPlugin()]} />
			<TanStackRouterDevtools position="bottom-left" />
		</div>
	);
}
