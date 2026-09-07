import armourData from "@/data/protection/armour.json";
import armourModificationsData from "@/data/protection/armourModifications.json";
import type { NewArmourJson, NewArmourModificationJson } from "@/types/json/JsonDataTypes";

export class ArmourService {
	static getArmourData(): NewArmourJson[] {
		return armourData;
	}

	static getArmourModificationsData(): NewArmourModificationJson[] {
		return armourModificationsData;
	}
}
