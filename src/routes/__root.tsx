import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<html className="dark">
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
					</Link>{" "}
					<Link
						to="/augmetics"
						activeProps={{
							className: "font-bold",
						}}
					>
						Augmetics
					</Link>{" "}
					<Link
						to="/psykers"
						activeProps={{
							className: "font-bold",
						}}
					>
						Psykers
					</Link>{" "}
					<Link
						to="/services"
						activeProps={{
							className: "font-bold",
						}}
					>
						Services
					</Link>{" "}
					<Link
						to="/about"
						activeProps={{
							className: "font-bold",
						}}
					>
						About
					</Link>
				</div>

				<div className="p-2">Dark mode toggle</div>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools position="bottom-right" />
		</html>
	);
}
