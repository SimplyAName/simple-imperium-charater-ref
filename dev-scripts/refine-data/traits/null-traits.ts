export function isTraitsEmpty(traitsValue: string) {
	if (
		traitsValue === null ||
		traitsValue === undefined ||
		traitsValue === "" ||
		traitsValue === "-"
	) {
		return true;
	}

	return false;
}
