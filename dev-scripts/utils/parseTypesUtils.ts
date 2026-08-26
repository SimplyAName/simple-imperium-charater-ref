export function parseNumberOrText(value: string | number): number {
	if (typeof value === "number") return value;
	return Number.parseInt(value);
}

export function parseRequiredNumber(value: string | number, fieldName: string): number {
	const parsedValue = typeof value === "number" ? value : Number.parseInt(value, 10);
	if (Number.isNaN(parsedValue)) {
		throw new Error(`Expected ${fieldName} to be numeric, received: ${value}`);
	}
	return parsedValue;
}


