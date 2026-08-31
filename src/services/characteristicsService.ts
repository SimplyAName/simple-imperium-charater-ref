import characteristicData from "@/data/character/characteristics.json";
import type { CharacteristicJson } from "@/types/json/JsonDataTypes";

export class CharacteristicsService {
	static getCharacteristicData(): CharacteristicJson[] {
		return characteristicData;
	}
}
