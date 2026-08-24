import { parseNumberOrText } from "./parseTypesUtils";

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
