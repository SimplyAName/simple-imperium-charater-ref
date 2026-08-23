import { generateJsonFile } from "../utils/generate-json-file";

type NewTravelJson = {
	quality: string;
	cost: number;
	examples: string;
	source: string;
};

export function refineTravelData(
	jsonData: { Quality: string; Cost: string; Examples: string; Source: string }[],
	filename: string,
) {
	const newTravelJsonData: NewTravelJson[] = [];

	for (const travel of jsonData) {
		const newTravelJson: NewTravelJson = {
			quality: travel.Quality,
			cost: Number.parseInt(travel.Cost),
			examples: travel.Examples,
			source: travel.Source,
		};

		newTravelJsonData.push(newTravelJson);
	}

	return generateJsonFile(newTravelJsonData, `travel/${filename}`);
}
