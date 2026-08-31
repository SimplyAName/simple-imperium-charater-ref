import type { NewArmourJson } from "@/types/json/JsonDataTypes";

import { extractValueFromBrackets } from "../utils/splitBracketProps";
import { extractTraitArray } from "./traits/extractTraitArray";

export function refineArmourData(
	jsonData: {
		Name: string;
		Locations: string;
		Armour: string;
		Encumbrance: string;
		Cost: string;
		Availability: string;
		Traits: string;
		Source: string;
	}[],
) {
	const newArmourJsonData: NewArmourJson[] = [];

	for (const armour of jsonData) {
		const newArmourJson: NewArmourJson = {
			name: armour.Name,
			locations: [], // Refine this
			armour: undefined,
			encumbrance: 0,
			wornEncumbrance: undefined,
			cost: Number.parseInt(armour.Cost),
			availability: armour.Availability,
			traits: undefined,
			source: armour.Source,
		};

		// Refine locations to array (with armour values?)
		if (armour.Locations && typeof armour.Locations === "string") {
			const locationArray = armour.Locations.split(",").map((value) => value.trim());
			newArmourJson.locations = locationArray;
		}

		// Refine armour to null and int
		if (armour.Armour && armour.Armour !== "-") {
			newArmourJson.armour = Number.parseInt(armour.Armour);
		}

		// Refine encumbrance to wornEncumbrance
		if (armour.Encumbrance) {
			const { baseValue, bracketValue } = extractValueFromBrackets(armour.Encumbrance);

			// console.log("Extracted enc values: ", encValues);

			//If no bracket value, just set encumbrance as item can't be worn or is the same encumbrance when worn
			if (bracketValue !== undefined) {
				newArmourJson.encumbrance = Number.parseInt(bracketValue);
				newArmourJson.wornEncumbrance = Number.parseInt(baseValue);
			} else {
				newArmourJson.encumbrance = Number.parseInt(armour.Encumbrance);
			}
		}

		// Refine traits to null with blank or "-". Also split to trait array
		if (armour.Traits && typeof armour.Traits === "string") {
			const traits = extractTraitArray(armour.Traits);
			newArmourJson.traits = traits;
		}

		newArmourJsonData.push(newArmourJson);
	}

	return newArmourJsonData;
}
