import { createFileRoute } from "@tanstack/react-router";

import { SimpleDataTable } from "@/components/ui/data-table/simple-data-table";
import { PsychicService } from "@/services/psychicService";

export const Route = createFileRoute("/psykers")({
	component: RouteComponent,
	loader: () => PsychicService.getPsychicPageData(),
});

function RouteComponent() {
	const { perils, phenomena, powers } = Route.useLoaderData();

	return (
		<div className="flex flex-col gap-4">
			<h1>Psykers</h1>
			<section>
				<h2>Psychic Powers</h2>
				<SimpleDataTable data={powers} wrapColumns={["effect"]} />
			</section>
			<section>
				<h2>Psychic Phenomena</h2>
				<SimpleDataTable data={phenomena} wrapColumns={["phenomenon", "lingering"]} />
			</section>
			<section>
				<h2>Perils of the Warp</h2>
				<SimpleDataTable data={perils} wrapColumns={["peril"]} />
			</section>

			{/* TODO: Add dedicated views for psychic weapon and table profiles. */}
		</div>
	);
}
