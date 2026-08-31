import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/talents")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/talents"!</div>;
}
