export function extractValueFromBrackets(value: string): {
	baseValue: string;
	bracketValue?: string;
} {
	const startBracketPos = value.indexOf("(");
	const endBracketPos = value.indexOf(")");

	let bracketValue;
	let baseValue;

	if (startBracketPos !== -1) {
		bracketValue = value.substring(startBracketPos + 1, endBracketPos).trim();
		baseValue = value.substring(0, startBracketPos).trim();
	}

	return {
		baseValue: baseValue ?? value,
		bracketValue: bracketValue,
	};
}
