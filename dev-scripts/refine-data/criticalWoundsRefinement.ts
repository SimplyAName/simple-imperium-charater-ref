import { generateJsonFile } from "../utils/generate-json-file";
import { parseNumberOrText } from "./remainingRefinement";

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

export function parseNumberRange(rangeData: string | number): number | NumberRange {
	if (typeof rangeData === "number") return rangeData;

	const splitIndex = rangeData.indexOf("-");
	if (splitIndex != -1) {
		return parseSplit(rangeData, splitIndex);
	}

	const plusMod = rangeData.indexOf("+");
	if (plusMod != -1) {
		return {
			min: parseNumberOrText(rangeData),
		};
	}

	return parseNumberOrText(rangeData);
}

function parseSplit(splitString: string, splitIndex: number) {
	const parsedMin = parseNumberOrText(splitString.substring(0, splitIndex));
	if (parsedMin == -1) {
		throw new TypeError(`Supplied min in range isn't a number! Range: ${splitString}`);
	}
	const parsedMax = parseNumberOrText(splitString.substring(splitIndex + 1));
	if (parsedMax == -1) {
		throw new TypeError(`Supplied max in range isn't a number! Range: ${splitString}`);
	}

	return {
		min: parsedMin,
		max: parsedMax,
	};
}
