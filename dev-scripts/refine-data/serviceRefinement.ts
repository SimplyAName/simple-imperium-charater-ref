import { generateJsonFile } from "../utils/generateJsonFile";
import type { NewServiceJson } from "./remainingRefinement";

export function refineServiceData(
	jsonData: { Quality: string; Cost: string; Examples: string; Source: string }[],
	filename: string,
) {
	const newServiceJsonData: NewServiceJson[] = [];

	for (const travel of jsonData) {
		const newServiceJson: NewServiceJson = {
			quality: travel.Quality,
			cost: Number.parseInt(travel.Cost),
			examples: travel.Examples,
			source: travel.Source,
		};

		newServiceJsonData.push(newServiceJson);
	}

	return generateJsonFile(newServiceJsonData, filename);
}
