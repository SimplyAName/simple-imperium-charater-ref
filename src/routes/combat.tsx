import { createFileRoute } from "@tanstack/react-router";

import { CombatActionsTable } from "@/components/pages/combat/combat-actions-table";
import { CriticalWoundsTable } from "@/components/pages/combat/criticalWounds/critical-wounds-table";
import { HitLocationsTable } from "@/components/pages/combat/hit-locations-table";
import { CombatActionsService } from "@/services/combat/combatActionsService";
import { CriticalWoundsService } from "@/services/combat/criticalWoundsService";
import { HitLocationsService } from "@/services/combat/hitLocationsService";

export const Route = createFileRoute("/combat")({
	component: RouteComponent,
	loader: () => ({
		combatActions: CombatActionsService.getCombatActionsData(),
		hitLocations: HitLocationsService.getHitLocationData(),
		criticalWounds: CriticalWoundsService.getAllCriticalWoundData(),
	}),
});

function RouteComponent() {
	const { combatActions, hitLocations, criticalWounds } = Route.useLoaderData();

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
				<h3>Injuries</h3>

				<HitLocationsTable hitLocations={hitLocations} />
			</section>

			<section>
				<h3>Hit locations</h3>

				<HitLocationsTable hitLocations={hitLocations} />
			</section>
		</div>
	);
}
