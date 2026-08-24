import { generateJsonFile } from "../utils/generateJsonFile";

export type NewArmourModificationsJson = {
	name: string;
	cost: number;
	availability: string;
	effect: string;
	source: string;
};

export function refineArmourModificationsData(
	jsonData: { Name: string; Cost: string; Availability: string; Effect: string; Source: string }[],
) {
	const newArmourModificationsJsonData: NewArmourModificationsJson[] = [];

	for (const armourMod of jsonData) {
		const newArmourModificationsJson: NewArmourModificationsJson = {
			name: armourMod.Name,
			cost: Number.parseInt(armourMod.Cost),
			availability: armourMod.Availability,
			effect: armourMod.Effect,
			source: armourMod.Source,
		};

		newArmourModificationsJsonData.push(newArmourModificationsJson);
	}

	return generateJsonFile(newArmourModificationsJsonData, "armourModifications.json");
}
