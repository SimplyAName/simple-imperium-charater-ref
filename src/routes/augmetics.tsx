import { createFileRoute } from "@tanstack/react-router";

import { AugmeticsTable } from "@/components/pages/augmetics/augmetics-table";
import { AugmeticsService } from "@/services/character/augmeticsService";

export const Route = createFileRoute("/augmetics")({
	component: AugmeticsComponent,
	loader: () => AugmeticsService.getAugmeticsData(),
});

function AugmeticsComponent() {
	const augmeticsData = Route.useLoaderData();

	return (
		<div>
			Hello "/augmetics"!
			<AugmeticsTable augmeticsData={augmeticsData} />
		</div>
	);
}
