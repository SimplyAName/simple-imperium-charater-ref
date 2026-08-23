import { generateJsonFile } from "../utils/generate-json-file";

type NewAccommodationJson = {
	quality: string;
	cost: number;
	examples: string;
	source: string;
};

export function refineAccommodationData(
	jsonData: { Quality: string; Cost: string; Examples: string; Source: string }[],
) {
	const newAccommodationJsonData: NewAccommodationJson[] = [];

	for (const accommodation of jsonData) {
		const newAccommodationJson: NewAccommodationJson = {
			quality: accommodation.Quality,
			cost: Number.parseInt(accommodation.Cost),
			examples: accommodation.Examples,
			source: accommodation.Source,
		};

		newAccommodationJsonData.push(newAccommodationJson);
	}

	return generateJsonFile(newAccommodationJsonData, "accommodationsServices.json");
}
