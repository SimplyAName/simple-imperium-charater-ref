import { createFileRoute } from "@tanstack/react-router";

import { SimpleDataTable } from "@/components/ui/data-table/simple-data-table";
import { EquipmentService } from "@/services/equipmentService";

export const Route = createFileRoute("/equipment")({
	component: RouteComponent,
	loader: () => EquipmentService.getEquipmentPageData(),
});

function RouteComponent() {
	const { clothing, medicae, tools } = Route.useLoaderData();

	return (
		<div className="flex flex-col gap-4">
			<h1>Equipment</h1>
			<section>
				<h2>Clothing and Personal Gear</h2>
				<SimpleDataTable data={clothing} wrapColumns={["effect"]} />
			</section>
			<section>
				<h2>Medicae Equipment</h2>
				<SimpleDataTable data={medicae} wrapColumns={["effect"]} />
			</section>
			<section>
				<h2>Tools</h2>
				<SimpleDataTable data={tools} wrapColumns={["effect"]} />
			</section>

			{/* TODO: Add a dedicated view for equipment tool detail profiles. */}
		</div>
	);
}
