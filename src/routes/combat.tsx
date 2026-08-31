import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/combat")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<p>Hello "/combat"!</p>
			<p>This should have the wound data etc as well</p>
		</div>
	);
}
