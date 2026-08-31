import talentData from "@/data/character/talents.json";
import type { NewTalentJson } from "@/types/json/JsonDataTypes";

export class TalentService {
	static getTalentData(): NewTalentJson[] {
		return talentData;
	}
}
