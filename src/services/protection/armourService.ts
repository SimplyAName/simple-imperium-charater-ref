import armourData from "@/data/protection/armour.json";
import type { NewArmourJson } from "@/types/json/JsonDataTypes";

export class ArmourService {
	static getArmourData(): NewArmourJson[] {
		return armourData;
	}
}
