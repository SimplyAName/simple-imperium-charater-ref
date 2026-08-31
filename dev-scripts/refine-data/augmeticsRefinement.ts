import type { NewAugmeticsJson } from "@/types/json/JsonDataTypes";

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

	return newAugmeticsJsonData;
}
