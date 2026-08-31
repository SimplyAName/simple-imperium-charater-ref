import criticalArmWoundData from "@/data/combat/criticalWounds/arm.json";
import criticalBodyWoundData from "@/data/combat/criticalWounds/body.json";
import criticalHeadWoundData from "@/data/combat/criticalWounds/head.json";
import criticalLegWoundData from "@/data/combat/criticalWounds/leg.json";
import type { NewCriticalWoundJson } from "@/types/json/JsonDataTypes";

export type AllCriticalWounds = {
	head: NewCriticalWoundJson[];
	body: NewCriticalWoundJson[];
	arm: NewCriticalWoundJson[];
	leg: NewCriticalWoundJson[];
};

export class CriticalWoundsService {
	static getAllCriticalWoundData(): AllCriticalWounds {
		return {
			head: this.getCriticalHeadWoundData(),
			body: this.getCriticalBodyWoundData(),
			arm: this.getCriticalArmWoundData(),
			leg: this.getCriticalLegWoundData(),
		};
	}

	static getCriticalHeadWoundData(): NewCriticalWoundJson[] {
		return criticalHeadWoundData;
	}

	static getCriticalBodyWoundData(): NewCriticalWoundJson[] {
		return criticalBodyWoundData;
	}

	static getCriticalArmWoundData(): NewCriticalWoundJson[] {
		return criticalArmWoundData;
	}

	static getCriticalLegWoundData(): NewCriticalWoundJson[] {
		return criticalLegWoundData;
	}
}
