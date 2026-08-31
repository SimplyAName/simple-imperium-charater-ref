import hitLocationData from "@/data/combat/hitLocations.json";
import type { NewHitLocationJson } from "@/types/json/JsonDataTypes";

export class HitLocationsService {
	static getHitLocationData(): NewHitLocationJson[] {
		return hitLocationData;
	}
}
