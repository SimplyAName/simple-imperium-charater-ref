import environmentalTraitsData from "@/data/combat/environmentalTraits.json";
import fumblesData from "@/data/combat/fumbles.json";
import injuriesData from "@/data/combat/injuries.json";
import conditionsData from "@/data/conditions.json";
import type {
	NewConditionJson,
	NewEnvironmentalTraitJson,
	NewFumbleJson,
	NewInjuriesJson,
} from "@/types/json/JsonDataTypes";

export type CombatReferenceData = {
	conditions: NewConditionJson[];
	environmentalTraits: NewEnvironmentalTraitJson[];
	fumbles: NewFumbleJson[];
	injuries: NewInjuriesJson[];
};

export class ConditionsService {
	static getConditionsData(): NewConditionJson[] {
		return conditionsData;
	}

	static getEnvironmentalTraitsData(): NewEnvironmentalTraitJson[] {
		return environmentalTraitsData;
	}

	static getFumblesData(): NewFumbleJson[] {
		return fumblesData;
	}

	static getInjuriesData(): NewInjuriesJson[] {
		return injuriesData;
	}

	static getCombatReferenceData(): CombatReferenceData {
		return {
			conditions: this.getConditionsData(),
			environmentalTraits: this.getEnvironmentalTraitsData(),
			fumbles: this.getFumblesData(),
			injuries: this.getInjuriesData(),
		};
	}
}
