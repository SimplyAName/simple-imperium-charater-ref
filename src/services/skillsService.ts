import skillData from "@/data/skills.json";
import type { NewSkillJson } from "@/types/json/JsonDataTypes";

export class SkillService {
	static getSkillData(): NewSkillJson[] {
		return skillData;
	}
}
