import { createFileRoute } from "@tanstack/react-router";

import { SkillsTable } from "@/components/pages/character/skills-table";
import { SkillService } from "@/services/skillsService";

export const Route = createFileRoute("/character")({
	component: CharacterComponent,
	loader: () => SkillService.getSkillData(),
});

function CharacterComponent() {
	const skillsData = Route.useLoaderData();

	return (
		<div>
			<h2>Hello "/character"!</h2>

			<SkillsTable skillsData={skillsData} />
		</div>
	);
}
