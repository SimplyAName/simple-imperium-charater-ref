import type { NewTraitJsonProp } from "../../../src/types/json/JsonDataTypes";
import { parseNumberOrText } from "../../utils/parseTypesUtils";
import { extractValueFromBrackets } from "../../utils/splitBracketProps";
import { isTraitsEmpty } from "./null-traits";

export function extractTraitArray(traitString: string): NewTraitJsonProp[] | undefined {
	if (isTraitsEmpty(traitString)) {
		return;
	}

	const traitsArray: NewTraitJsonProp[] = [];

	const traitsSplit = traitString.split(",").map((value) => value.trim());

	// Not multiple traits
	if (!traitsSplit || traitsSplit.length <= 0) {
		traitsArray.push(generateTraitJson(traitString));
		return traitsArray;
	}

	for (const currTrait of traitsSplit) {
		traitsArray.push(generateTraitJson(currTrait));
	}

	return traitsArray;
}

function generateTraitJson(traitString: string): NewTraitJsonProp {
	const { baseValue, bracketValue } = extractValueFromBrackets(traitString);
	const parsedValue = bracketValue ? parseBracketValue(bracketValue) : undefined;

	return {
		name: baseValue,
		value: parsedValue,
	};
}

function parseBracketValue(bracketValue: string) {
	const numParse = parseNumberOrText(bracketValue);
	if (!Number.isNaN(numParse)) {
		return numParse;
	}

	return bracketValue as string;
}
