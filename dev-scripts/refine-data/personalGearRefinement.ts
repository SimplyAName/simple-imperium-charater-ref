import { generateJsonFile } from "../utils/generate-json-file";

type NewPersonalGearJson = {
	name: string;
	cost: number;
	availability: string;
	encumbrance: number;
	effect: string;
	source: string;
};

export function refinePersonalGearData(
	jsonData: {
		Name: string;
		Cost: string;
		Availability: string;
		Encumbrance: string;
		Effect: string;
		Source: string;
	}[],
) {
	const newPersonalGearJsonData: NewPersonalGearJson[] = [];

	for (const personalGear of jsonData) {
		const newPersonalGearJson: NewPersonalGearJson = {
			name: personalGear.Name,
			cost: Number.parseInt(personalGear.Cost),
			availability: personalGear.Availability,
			encumbrance: Number.parseInt(personalGear.Encumbrance),
			effect: personalGear.Effect,
			source: personalGear.Source,
		};

		newPersonalGearJsonData.push(newPersonalGearJson);
	}

	return generateJsonFile(newPersonalGearJsonData, "clothingAndPersonalGear.json");
}
