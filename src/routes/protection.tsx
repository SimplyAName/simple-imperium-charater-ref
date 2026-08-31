import { createFileRoute } from "@tanstack/react-router";

import { ArmourModificationsTable } from "@/components/pages/talents/armour-modifications-table";
import { ArmourTable } from "@/components/pages/talents/armour-table";
import { ForceFieldsTable } from "@/components/pages/talents/force-field-table";
import { ArmourService } from "@/services/protection/armourService";
import { ForceFieldService } from "@/services/protection/forceFieldsService";

export const Route = createFileRoute("/protection")({
	component: RouteComponent,
	loader: () => ({
		forceFields: ForceFieldService.getForceFieldData(),
		armour: ArmourService.getArmourData(),
	}),
});

function RouteComponent() {
	const { forceFields, armour } = Route.useLoaderData();

	return (
		<div className="flex flex-col gap-4">
			Hello "/protection"!
			<section>
				<h3>Armour</h3>

				<ArmourTable armour={armour} />
			</section>
			<hr />
			<section>
				<h3>Armour Modifications</h3>

				<ArmourModificationsTable armourModifications={armour} />
			</section>
			<hr />
			<section>
				<h3>Force fields</h3>

				<ForceFieldsTable forceField={forceFields} />
			</section>
		</div>
	);
}
