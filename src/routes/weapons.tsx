import { createFileRoute } from "@tanstack/react-router";

import { SimpleDataTable } from "@/components/ui/data-table/simple-data-table";
import { WeaponsService } from "@/services/weaponsService";

export const Route = createFileRoute("/weapons")({
	component: RouteComponent,
	loader: () => WeaponsService.getWeaponsPageData(),
});

function RouteComponent() {
	const { modifications, traits } = Route.useLoaderData();

	return (
		<div className="flex flex-col gap-4">
			<h1>Weapons</h1>
			<section>
				<h2>Weapon Modifications</h2>
				<SimpleDataTable data={modifications} wrapColumns={["usedWith", "effects"]} />
			</section>
			<section>
				<h2>Traits</h2>
				<SimpleDataTable data={traits} wrapColumns={["description"]} />
			</section>

			{/* TODO: Add dedicated views for ranged, melee, explosive, and custom ammunition data. */}
		</div>
	);
}
