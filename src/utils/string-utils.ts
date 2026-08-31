/**
 * Checks if string2 is contained in string1 after setting both to lower case for case insensitivity
 *
 * @param string1
 * @param string2
 * @returns If string1 contains string2
 */
export function stringIncludes(string1: string | undefined, string2: string | undefined): boolean {
	if (string1 === string2) {
		return true;
	}

	if (!string1 || !string2) {
		return false;
	}

	const temp = string1.toLowerCase().includes(string2.toLowerCase());

	return temp;
}
