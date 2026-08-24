import { generateJsonFile } from "../utils/generateJsonFile";

type NewSkillJson = {
	skill: string;
	characteristic: string;
	specialisations: NewSpecialisationJson[];
};

// TODO: This data wasn't provided. Extract this from the book
// For now going to set a name but no desc
type NewSpecialisationJson = {
	name: string;
	description?: string;
};

export function refineSkillsData(
	jsonData: { Skill: string; Characteristic: string; Specialisations: string }[],
) {
	const newSkillsJsonData: NewSkillJson[] = [];

	for (const skill of jsonData) {
		const newSkillsJson: NewSkillJson = {
			skill: skill.Skill,
			characteristic: skill.Characteristic,
			specialisations: [],
		};

		const specList = skill.Specialisations.split(",").map((value) => {
			return {
				name: value,
			};
		});

		newSkillsJson.specialisations = specList;

		newSkillsJsonData.push(newSkillsJson);
	}

	return generateJsonFile(newSkillsJsonData, "skills.json");
}
