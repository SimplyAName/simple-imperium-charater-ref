import namesData from "@/data/character/creation/names.json";
import originData from "@/data/character/creation/origin.json";
import type { CharacterOriginJson, NewNameJson } from "@/types/json/JsonDataTypes";

export class CharacterCreationService {
	static getNamesData(): NewNameJson[] {
		return namesData;
	}

	static getOriginData(): CharacterOriginJson[] {
		return originData;
	}
}
