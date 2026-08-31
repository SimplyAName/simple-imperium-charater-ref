import characteristicImprovementData from "@/data/xpCosts/characteristicImprovement.json";
import type { NewCharacteristicImprovementJson } from "@/types/json/JsonDataTypes";

export class CharacteristicImprovementService {
	static getCharacteristicImprovementData(): NewCharacteristicImprovementJson[] {
		return characteristicImprovementData;
	}
}
