import skillSpecialisationData from "@/data/xpCosts/skillSpecialisation.json";
import type { NewSkillSpecialisationJson } from "@/types/json/JsonDataTypes";

export class SkillSpecialisationService {
	static getSkillSpecialisationData(): NewSkillSpecialisationJson[] {
		return skillSpecialisationData;
	}
}
