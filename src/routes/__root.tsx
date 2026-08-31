import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { ThemeToggle } from "@/components/ui/theme-toggle";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<div className="flex flex-row items-center justify-between">
				<div className="flex gap-2 p-2 text-lg">
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
			<TanStackRouterDevtools position="bottom-right" />
		</>
	);
}
