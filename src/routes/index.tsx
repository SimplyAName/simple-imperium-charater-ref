import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div>
			<h1>Hello world, you are home!</h1>
			<section>
				<h2>How to use this site</h2>
			</section>
			<section>
				<h2>TLDR: How to create a character</h2>
			</section>
		</div>
	);
}
