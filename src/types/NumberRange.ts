/**
 * -1 represents infinity/max/min. E.g: {min: 10, max: -1} = 10+
 */
export type NumberRange = { min: number; max?: number };

export function isNumberRange(value: unknown): value is NumberRange {
	return (
		typeof value === "object" && value !== null && "min" in value && typeof value.min === "number"
	);
}
