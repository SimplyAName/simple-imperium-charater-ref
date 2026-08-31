import augmeticsData from "@/data/equipment/augmetics.json";
import type { NewAugmeticsJson } from "@/types/json/JsonDataTypes";

export class AugmeticsService {
	static getAugmeticsData(): NewAugmeticsJson[] {
		return augmeticsData;
	}
}
