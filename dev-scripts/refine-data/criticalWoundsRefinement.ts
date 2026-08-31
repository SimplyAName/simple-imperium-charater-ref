import type { NewCriticalWoundJson } from "../../src/types/json/JsonDataTypes";
import { generateJsonFile } from "../utils/generateJsonFile";
import { parseNumberRange } from "../utils/parseNumberRange";

export type NewCriticalWoundsSections = {
	head: NewCriticalWoundJson;
	arm: NewCriticalWoundJson;
	body: NewCriticalWoundJson;
	leg: NewCriticalWoundJson;
};

export function refineCriticalWoundsData(
	jsonData: {
		CriticalWounds: {
			Head: { Roll: string; Description: string; Effect: string; Treatment: string }[];
			Arm: { Roll: string; Description: string; Effect: string; Treatment: string }[];
			Body: { Roll: string; Description: string; Effect: string; Treatment: string }[];
			Leg: { Roll: string; Description: string; Effect: string; Treatment: string }[];
		};
	},
	basePath = "criticalWounds",
) {
	generateJsonFile(generateWoundObject(jsonData.CriticalWounds.Head), `${basePath}/head.json`);
	generateJsonFile(generateWoundObject(jsonData.CriticalWounds.Arm), `${basePath}/arm.json`);
	generateJsonFile(generateWoundObject(jsonData.CriticalWounds.Body), `${basePath}/body.json`);
	generateJsonFile(generateWoundObject(jsonData.CriticalWounds.Leg), `${basePath}/leg.json`);
}

export function generateWoundObject(
	woundData: { Roll: string; Description: string; Effect: string; Treatment: string }[],
): NewCriticalWoundJson[] {
	return woundData.map((wound): NewCriticalWoundJson => {
		return {
			roll: parseNumberRange(wound.Roll),
			description: wound.Description,
			effects: wound.Effect,
			treatment: wound.Treatment,
		};
	});
}
