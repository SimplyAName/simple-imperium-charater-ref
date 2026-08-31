import type { NewSkillJson } from "@/types/json/JsonDataTypes";

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
				name: value.trim(),
			};
		});

		newSkillsJson.specialisations = specList;

		newSkillsJsonData.push(newSkillsJson);
	}

	return newSkillsJsonData;
}
