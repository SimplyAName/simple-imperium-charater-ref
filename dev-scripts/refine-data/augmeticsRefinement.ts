import { generateJsonFile } from "../utils/generateJsonFile";

type NewAugmeticsJson = {
	name: string;
	cost: number;
	availability: string;
	effect: string;
	source: string;
};

export function refineAugmeticsData(
	jsonData: { Name: string; Cost: string; Availability: string; Effect: string; Source: string }[],
) {
	const newAugmeticsJsonData: NewAugmeticsJson[] = [];

	for (const augmetics of jsonData) {
		const newAugmeticsJson: NewAugmeticsJson = {
			name: augmetics.Name,
			cost: Number.parseInt(augmetics.Cost),
			availability: augmetics.Availability,
			effect: augmetics.Effect,
			source: augmetics.Source,
		};

		newAugmeticsJsonData.push(newAugmeticsJson);
	}

	return generateJsonFile(newAugmeticsJsonData, "augmetics.json");
}
