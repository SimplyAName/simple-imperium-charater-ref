export function parseNumberOrText(value: string | number): number {
	if (typeof value === "number") return value;

	// Remove commas for numbers formatted with them. E.g: 1,200 -> 1200
	value = value.replaceAll(/,/g, "");

	return Number.parseInt(value);
}

export function parseRequiredNumber(value: string | number, fieldName: string): number {
	if (typeof value === "number") {
		return value;
	}

	const parsedValue = Number.parseInt(value);
	if (Number.isNaN(parsedValue)) {
		throw new Error(`Expected ${fieldName} to be numeric, received: ${value}`);
	}
	return parsedValue;
}
