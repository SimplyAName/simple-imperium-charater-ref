import { createFileRoute } from "@tanstack/react-router";

import { CombatActionsTable } from "@/components/pages/combat/combat-actions-table";
import { CriticalWoundsTable } from "@/components/pages/combat/criticalWounds/critical-wounds-table";
import { HitLocationsTable } from "@/components/pages/combat/hit-locations-table";
import { SimpleDataTable } from "@/components/ui/data-table/simple-data-table";
import { CombatActionsService } from "@/services/combat/combatActionsService";
import { ConditionsService } from "@/services/combat/conditionsService";
import { CriticalWoundsService } from "@/services/combat/criticalWoundsService";
import { HitLocationsService } from "@/services/combat/hitLocationsService";

export const Route = createFileRoute("/combat")({
	component: RouteComponent,
	loader: () => ({
		combatActions: CombatActionsService.getCombatActionsData(),
		hitLocations: HitLocationsService.getHitLocationData(),
		criticalWounds: CriticalWoundsService.getAllCriticalWoundData(),
		...ConditionsService.getCombatReferenceData(),
	}),
});

function RouteComponent() {
	const {
		combatActions,
		hitLocations,
		criticalWounds,
		conditions,
		environmentalTraits,
		fumbles,
		injuries,
	} = Route.useLoaderData();

	return (
		<div>
			<p>Hello "/combat"!</p>
			<p>This should have the wound data etc as well</p>

			<section>
				<h3>Combat actions</h3>

				{/** TODO: Separate the actions out to into attack, defend, move etc make using it combat easier */}

				<CombatActionsTable combatActions={combatActions} />
			</section>

			<section>
				<h3>Hit locations</h3>

				<HitLocationsTable hitLocations={hitLocations} />
			</section>

			<section>
				<h3>Conditions</h3>
				<SimpleDataTable data={conditions} wrapColumns={["description"]} />
			</section>

			<section>
				<h3>Environmental Traits</h3>
				<SimpleDataTable data={environmentalTraits} wrapColumns={["description"]} />
			</section>

			<section>
				<h3>Fumbles</h3>
				<SimpleDataTable data={fumbles} wrapColumns={["result"]} />
			</section>

			<section>
				<h3>Injuries</h3>
				<SimpleDataTable data={injuries} wrapColumns={["minor", "major"]} />
			</section>

			<section>
				<h3>Critical Wounds</h3>

				<div className="flex flex-row flex-wrap gap-2">
					<div className="w-full">
						<div>Head</div>
						<CriticalWoundsTable criticalWounds={criticalWounds.head} />
					</div>
					<div className="w-full">
						<div>Body</div>
						<CriticalWoundsTable criticalWounds={criticalWounds.body} />
					</div>
					<div className="w-full">
						<div>Arm</div>
						<CriticalWoundsTable criticalWounds={criticalWounds.arm} />
					</div>
					<div className="w-full">
						<div>Leg</div>
						<CriticalWoundsTable criticalWounds={criticalWounds.leg} />
					</div>
				</div>
			</section>

			<section>
				<h3>Hit locations</h3>

				<HitLocationsTable hitLocations={hitLocations} />
			</section>
		</div>
	);
}
