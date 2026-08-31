import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/character")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<h2>Hello "/character"!</h2>
		</div>
	);
}
