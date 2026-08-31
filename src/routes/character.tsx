import { createFileRoute } from "@tanstack/react-router";

import { CharacteristicImprovementsTable } from "@/components/pages/character/characteristic-improvements-table";
import { CharacteristicsTable } from "@/components/pages/character/characteristics-table";
import { SkillSpecialisationsTable } from "@/components/pages/character/skill-specialisations-table";
import { SkillsTable } from "@/components/pages/character/skills-table";
import { CharacteristicImprovementService } from "@/services/character/characteristicImprovementsService";
import { CharacteristicsService } from "@/services/characteristicsService";
import { SkillSpecialisationService } from "@/services/skillSpecialisationsService";
import { SkillService } from "@/services/skillsService";

export const Route = createFileRoute("/character")({
	component: CharacterComponent,
	loader: () => ({
		skills: SkillService.getSkillData(),
		characteristics: CharacteristicsService.getCharacteristicData(),
		xpCosts: {
			skillSpecs: SkillSpecialisationService.getSkillSpecialisationData(),
			characteristics: CharacteristicImprovementService.getCharacteristicImprovementData(),
		},
	}),
});

function CharacterComponent() {
	const { skills, characteristics, xpCosts } = Route.useLoaderData();

	return (
		<div className="flex flex-col gap-2">
			<h2>Hello "/character"!</h2>

			<section className="flex max-w-full flex-col gap-4">
				<h3>Characteristics</h3>

				<CharacteristicsTable characteristicsData={characteristics} />
			</section>

			<hr />

			<section className="flex flex-col gap-4">
				<h3>Skills</h3>

				<SkillsTable skillsData={skills} />
			</section>

			<hr />

			<section>
				<h3>XP costs</h3>
				<div className="grid grid-cols-2 gap-2">
					<div>
						<h4>Skill Specialisations Costs</h4>
						<SkillSpecialisationsTable skillSpecialisationsData={xpCosts.skillSpecs} />
					</div>
					<div>
						<h4>Characteristic Improvement Costs</h4>
						<CharacteristicImprovementsTable
							characteristicImprovementsData={xpCosts.characteristics}
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
