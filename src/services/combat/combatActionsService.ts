import combatActionData from "@/data/combat/combatActions.json";
import type { NewCombatActionJson } from "@/types/json/JsonDataTypes";

export class CombatActionsService {
	static getCombatActionsData(): NewCombatActionJson[] {
		return combatActionData;
	}
}
