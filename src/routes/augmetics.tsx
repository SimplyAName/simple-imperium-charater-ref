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
		<div className="flex flex-col items-center justify-center-safe gap-4 py-4">
			Hello "/augmetics"!
			<AugmeticsTable augmeticsData={augmeticsData} className="p-2" />
		</div>
	);
}
