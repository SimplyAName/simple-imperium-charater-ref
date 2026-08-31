import forcefieldData from "@/data/protection/forceFields.json";
import type { NewForceFieldJson } from "@/types/json/JsonDataTypes";

export class ForceFieldService {
	static getForceFieldData(): NewForceFieldJson[] {
		return forcefieldData;
	}
}
