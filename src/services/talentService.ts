import talentData from "@/data/talents.json";
import type { NewTalentJson } from "@/types/json/JsonDataTypes";

export class TalentService {
	static getTalentData(): NewTalentJson[] {
		return talentData;
	}
}
