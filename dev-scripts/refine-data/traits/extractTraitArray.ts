import type { NewTraitJson } from "../../../src/types/json/JsonDataTypes";
import { extractValueFromBrackets } from "../../utils/splitBracketProps";
import { isTraitsEmpty } from "./null-traits";

export function extractTraitArray(traitString: string): NewTraitJson[] | undefined {
	if (isTraitsEmpty(traitString)) {
		return;
	}

	const traitsArray: NewTraitJson[] = [];

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

function generateTraitJson(traitString: string): NewTraitJson {
	const { baseValue, bracketValue } = extractValueFromBrackets(traitString);
	const parsedValue = bracketValue === undefined ? undefined : Number.parseInt(bracketValue, 10);

	return {
		name: baseValue,
		value: parsedValue,
	};
}
