import { generateJsonFile } from "../utils/generateJsonFile";
import { parseNumberRange } from "../utils/parseNumberRange";

/**
 * -1 represents infinity/max/min. E.g: {min: 10, max: -1} = 10+
 */
export type NumberRange = { min: number; max?: number };

export type NewCriticalWoundsJson = {
	roll: number | NumberRange;
	description: string;
	effects: string;
	treatment: string;
};

export type NewCriticalWoundsSections = {
	head: NewCriticalWoundsJson;
	arm: NewCriticalWoundsJson;
	body: NewCriticalWoundsJson;
	leg: NewCriticalWoundsJson;
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
): NewCriticalWoundsJson[] {
	return woundData.map((wound): NewCriticalWoundsJson => {
		return {
			roll: parseNumberRange(wound.Roll),
			description: wound.Description,
			effects: wound.Effect,
			treatment: wound.Treatment,
		};
	});
}
