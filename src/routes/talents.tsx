import { createFileRoute } from "@tanstack/react-router";

import { TalentsTable } from "@/components/pages/talents/talents-table";
import { TalentService } from "@/services/talentsService";

export const Route = createFileRoute("/talents")({
	component: TalentsComponent,
	loader: () => TalentService.getTalentData(),
});

function TalentsComponent() {
	const talentData = Route.useLoaderData();

	return (
		<div>
			Hello "/talents"!
			<TalentsTable className="max-w-fit" talentData={talentData} />
		</div>
	);
}
