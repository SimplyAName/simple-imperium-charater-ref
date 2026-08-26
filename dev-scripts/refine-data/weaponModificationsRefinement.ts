import type { NewWeaponModificationsJson } from "../../src/types/json/JsonDataTypes";

//TODO: Maybe split Effects into an array?
export function weaponModificationsRefinement(
	jsonData: {
		Name: string;
		Cost: string;
		Availability: string;
		Type: string;
		"Used With": string;
		Effects: string;
		Source: string;
	}[],
): NewWeaponModificationsJson[] {
	const newWeaponModificationsJsonData: NewWeaponModificationsJson[] = [];

	for (const weaponMod of jsonData) {
		const newArmourModificationsJson: NewWeaponModificationsJson = {
			name: weaponMod.Name,
			cost: Number.parseInt(weaponMod.Cost),
			type: weaponMod.Type,
			usedWith: weaponMod["Used With"],
			availability: weaponMod.Availability,
			effects: weaponMod.Effects,
			source: weaponMod.Source,
		};

		newWeaponModificationsJsonData.push(newArmourModificationsJson);
	}

	return newWeaponModificationsJsonData;
}
