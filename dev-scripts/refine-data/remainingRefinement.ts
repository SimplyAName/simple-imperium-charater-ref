import type {
	NewEquipmentJson,
	NewWeaponJson,
	NewMeleeWeaponJson,
	NewAmmunitionJson,
	NewMedicalServiceJson,
	NewFumbleJson,
	NewHitLocationsJson,
	NewInjuriesJson,
	NewNameJson,
	NewPerilsOfTheWarpJson,
	NewCombatActionJson,
	NewToolDetailProfileJson,
	NewConditionJson,
	NewTraitJson,
	NewPsychicPhenomenaJson,
	NewSkillSpecialisationJsonProp,
	NewCharacteristicImprovementJsonProp,
	NewTalentJson,
	NewPsychicPowersJson,
	NewWeaponProfileJson,
	NewTableProfileJson,
} from "../../src/types/json/JsonDataTypes";
import { parseNumberRange } from "../utils/parseNumberRange";
import { parseNumberOrText, parseRequiredNumber } from "../utils/parseTypesUtils";
import { extractValueFromBrackets } from "../utils/splitBracketProps";
import { extractTraitArray } from "./traits/extractTraitArray";

type EquipmentRecord = {
	Name: string;
	Cost: string | number;
	Availability: string;
	Encumbrance: string | number;
	Effect: string;
	Source: string;
};

type WeaponRecord = {
	Name: string;
	Specialisation: string;
	Damage: string | number;
	Range?: string;
	Magazine?: string | number;
	Encumbrance: string | number;
	Cost?: string | number;
	"Cost (Mag)"?: string | number;
	Availability: string;
	Traits?: string | { name: string; value?: number | null }[];
	Source: string;
};

type MeleeWeaponRecord = {
	Name: string;
	Specialisation: string;
	Damage: string;
	Range?: string;
	Magazine?: string | number;
	Encumbrance: string | number;
	Cost?: string | number;
	"Cost (Mag)"?: string | number;
	Availability: string;
	Traits?: string | { name: string; value?: number | null }[];
	Source: string;
};

type ParsedWeaponDamage = {
	damage: number;
	bonus: string;
};

function parseMeleeWeaponDamage(value: string): ParsedWeaponDamage {
	const split = value.split("+");

	return {
		damage: parseNumberOrText(split[0]),
		bonus: split[1],
	};
}

export function refineEquipmentData(jsonData: EquipmentRecord[]): NewEquipmentJson[] {
	return jsonData.map((equipment) => ({
		name: equipment.Name,
		cost: parseNumberOrText(equipment.Cost),
		availability: equipment.Availability,
		encumbrance: parseRequiredNumber(equipment.Encumbrance, "encumbrance"),
		effect: equipment.Effect,
		source: equipment.Source,
	}));
}

export function refineWeaponData(jsonData: WeaponRecord[]): NewWeaponJson[] {
	return jsonData.map((weapon) => {
		const costText = weapon["Cost (Mag)"] ?? weapon.Cost ?? "-";
		const { baseValue: cost, bracketValue: magazineCost } =
			typeof costText === "string"
				? extractValueFromBrackets(costText)
				: { baseValue: costText.toString() };
		const refinedWeapon: NewWeaponJson = {
			name: weapon.Name,
			specialisation: weapon.Specialisation,
			damage: parseNumberOrText(weapon.Damage),
			encumbrance: parseRequiredNumber(weapon.Encumbrance, "encumbrance"),
			cost: parseNumberOrText(cost),
			availability: weapon.Availability,
			source: weapon.Source,
		};

		if (weapon.Range !== undefined) refinedWeapon.range = weapon.Range;
		if (weapon.Magazine !== undefined) {
			refinedWeapon.magazine = parseRequiredNumber(weapon.Magazine, "magazine");
		}
		if (magazineCost !== undefined) {
			refinedWeapon.magazineCost = parseNumberOrText(magazineCost);
		}
		if (weapon.Traits) {
			refinedWeapon.traits = Array.isArray(weapon.Traits)
				? weapon.Traits.map(({ name, value }) => (value === null ? { name } : { name, value }))
				: extractTraitArray(weapon.Traits);
		}

		return refinedWeapon;
	});
}

export function refineMeleeWeaponData(jsonData: MeleeWeaponRecord[]): NewMeleeWeaponJson[] {
	return jsonData.map((weapon) => {
		const costText = weapon["Cost (Mag)"] ?? weapon.Cost ?? "-";
		const { baseValue: cost, bracketValue: magazineCost } =
			typeof costText === "string"
				? extractValueFromBrackets(costText)
				: { baseValue: costText.toString() };
		const { bonus, damage } = parseMeleeWeaponDamage(weapon.Damage);
		const refinedWeapon: NewMeleeWeaponJson = {
			name: weapon.Name,
			specialisation: weapon.Specialisation,
			damage: damage,
			bonus: bonus,
			encumbrance: parseRequiredNumber(weapon.Encumbrance, "encumbrance"),
			cost: parseNumberOrText(cost),
			availability: weapon.Availability,
			source: weapon.Source,
		};

		if (weapon.Range !== undefined) refinedWeapon.range = weapon.Range;
		if (weapon.Magazine !== undefined) {
			refinedWeapon.magazine = parseRequiredNumber(weapon.Magazine, "magazine");
		}
		if (magazineCost !== undefined) {
			refinedWeapon.magazineCost = parseNumberOrText(magazineCost);
		}
		if (weapon.Traits) {
			refinedWeapon.traits = Array.isArray(weapon.Traits)
				? weapon.Traits.map(({ name, value }) => (value === null ? { name } : { name, value }))
				: extractTraitArray(weapon.Traits);
		}

		return refinedWeapon;
	});
}

export function refineAmmunitionData(
	jsonData: {
		Name: string;
		Damage: string | number;
		Cost: string | number;
		Availability: string;
		"Used With"?: string;
		Traits: string | { name: string; value?: number | null }[];
		Source: string;
	}[],
): NewAmmunitionJson[] {
	return jsonData.map((ammunition) => ({
		name: ammunition.Name,
		damage: parseNumberOrText(ammunition.Damage),
		cost: parseNumberOrText(ammunition.Cost),
		availability: ammunition.Availability,
		usedWith: ammunition["Used With"] ?? "",
		traits: Array.isArray(ammunition.Traits)
			? ammunition.Traits.map(({ name, value }) => (value === null ? { name } : { name, value }))
			: extractTraitArray(ammunition.Traits),
		source: ammunition.Source,
	}));
}

export function refineForceFieldData(
	jsonData: {
		Name: string;
		Protection: string;
		Overload: string | number;
		Encumbrance: string | number;
		Cost: string | number;
		Availability: string;
		Effect: string;
		Source: string;
	}[],
) {
	return jsonData.map((field) => ({
		name: field.Name,
		protection: field.Protection,
		overload: parseNumberOrText(field.Overload),
		encumbrance: parseRequiredNumber(field.Encumbrance, "encumbrance"),
		cost: parseNumberOrText(field.Cost),
		availability: field.Availability,
		effect: field.Effect,
		source: field.Source,
	}));
}

export function refineCombatActionData(
	jsonData: { Name: string; Description: string }[],
): NewCombatActionJson[] {
	return jsonData.map((field) => ({
		name: field.Name,
		description: field.Description,
	}));
}

export function refineToolDetailProfilesData(
	jsonData: {
		id: string;
		type: string;
		headers: string[];
		rows: { Spec: string; DMG: string; Cost: string; Avail: string; Enc: string; Traits: string }[];
	}[],
): NewToolDetailProfileJson[] {
	return jsonData.flatMap((toolDetailProfile) => {
		const newToolDetailProfileName = toolDetailProfile.id;
		const newToolDetailProfileSource = "Adeptus Mechanicus Player's Guide";

		return toolDetailProfile.rows.map((toolDetailProfileData): NewToolDetailProfileJson => {
			const dmg = parseMeleeWeaponDamage(toolDetailProfileData.DMG);

			return {
				name: newToolDetailProfileName,
				specialisation: toolDetailProfileData.Spec,
				damage: dmg.damage,
				bonus: dmg.bonus,
				encumbrance: parseNumberOrText(toolDetailProfileData.Enc),
				cost: parseNumberOrText(toolDetailProfileData.Cost),
				availability: toolDetailProfileData.Avail,
				traits: Array.isArray(toolDetailProfileData.Traits)
					? toolDetailProfileData.Traits.map(({ name, value }) =>
							value === null ? { name } : { name, value },
						)
					: extractTraitArray(toolDetailProfileData.Traits),
				source: newToolDetailProfileSource,
			};
		});
	});
}

export function refineEnvironmentalTraitData(
	jsonData: { Name: string; Description: string }[],
): NewTraitJson[] {
	return jsonData.map((field) => ({
		name: field.Name,
		description: field.Description,
	}));
}

// TODO: Refine the splitting of Requirement into an array. Can be used later for character creator and validating picks
export function refineTalentData(
	jsonData: { Name: string; Requirement: string; Description: string; Source: string }[],
): NewTalentJson[] {
	return jsonData.map((field) => ({
		name: field.Name,
		requirements:
			field.Requirement === "-"
				? undefined
				: field.Requirement.split(",").map((value) => value.trim()),
		description: field.Description,
		source: field.Source,
	}));
}

type WeaponProfileProps = {
	id: string;
	type: string;
	rows: {
		Name?: string;
		Spec?: string;
		Specialisation?: string;
		DMG?: string;
		Dmg?: string;
		Cost?: string;
		Avail: string;
		Enc: string;
		Traits: string;
	}[];
};

export function refineWeaponProfileData(jsonData: WeaponProfileProps): NewWeaponProfileJson {
	const weaponProfileName = jsonData.id;

	const weaponProfileData = jsonData.rows[0];

	const weaponProfileDmg = weaponProfileData.DMG ?? weaponProfileData.Dmg;

	if (weaponProfileDmg === undefined) {
		throw new Error(`No dmg found in weapon profile! Data: ${JSON.stringify(weaponProfileData)}`);
	}

	const dmg = weaponProfileDmg === "-" ? undefined : parseMeleeWeaponDamage(weaponProfileDmg);

	const weaponProfileSpec = weaponProfileData.Spec ?? weaponProfileData.Specialisation;

	return {
		name: weaponProfileName,
		specialisation: weaponProfileSpec,
		damage: dmg?.damage,
		bonus: dmg?.bonus,
		encumbrance: parseNumberOrText(weaponProfileData.Enc),
		cost:
			weaponProfileData.Cost == undefined ? undefined : parseNumberOrText(weaponProfileData.Cost),
		availability: weaponProfileData.Avail,
		traits: Array.isArray(weaponProfileData.Traits)
			? weaponProfileData.Traits.map(({ name, value }) =>
					value === null ? { name } : { name, value },
				)
			: extractTraitArray(weaponProfileData.Traits),
	};
}

export type PsychicDetailProfileJson = {
	tableProfiles: NewTableProfileJson[];
	weaponProfiles: NewWeaponProfileJson[];
};

export function refinePsychicDetailProfilesData(
	jsonData: {
		id: string;
		header?: string;
		type: string;
		table?: { sl: string; effect: string }[];
		rows?: {
			Name: string;
			Spec?: string;
			Specialisation?: string;
			Dmg: string;
			Enc: string;
			Traits: string;
		}[];
	}[],
): PsychicDetailProfileJson {
	//TODO: Split the two types of data. Then process them through the correct parsers

	const result: PsychicDetailProfileJson = {
		tableProfiles: [],
		weaponProfiles: [],
	};

	for (const field of jsonData) {
		if (field.table) {
			// Parse table profile
			result.tableProfiles.push(refineTableProfileData(field as TableProfileProps));
			continue;
		}

		if (field.rows) {
			//Parse weapon profile

			result.weaponProfiles.push(refineWeaponProfileData(field as WeaponProfileProps));
			continue;
		}

		throw new Error("No data found!");
	}

	return result;
}

type TableProfileProps = {
	id: string;
	type: string;
	header: string;
	table: { sl: string; effect: string }[];
};

function refineTableProfileData({ id, header, table }: TableProfileProps): NewTableProfileJson {
	return {
		name: id,
		description: header,
		data: table.map((value) => {
			return {
				sl: parseNumberRange(value.sl),
				effect: value.effect,
			};
		}),
	};
}

//TODO: Refine Difficulty into a number and have a enum with another file for the text
export function refinePsychicPowersData(
	jsonData: {
		Name: string;
		"Warp Rating": string;
		Difficulty: string;
		Range: string;
		Target: string;
		Duration: string;
		Effect: string;
		Discipline: string;
		Source: string;
	}[],
): NewPsychicPowersJson[] {
	return jsonData.map((field) => ({
		name: field.Name,
		warpRating: parseNumberOrText(field["Warp Rating"]),
		difficulty: field.Difficulty,
		range: field.Range,
		target: field.Target,
		duration: field.Duration,
		effect: field.Effect,
		discipline: field.Discipline,
		source: field.Source,
	}));
}

export function refineConditionData(jsonData: {
	Bleeding: string;
	Blinded: string;
	Deafened: string;
	Fatigued: string;
	Ablaze: string;
	Frightened: string;
	Incapacitated: string;
	Overburdened: string;
	Poisoned: string;
	Prone: string;
	Restrained: string;
	Stunned: string;
	Unconscious: string;
}): NewConditionJson[] {
	return Object.keys(jsonData).map((key) => {
		return { name: key, description: jsonData[key as keyof typeof jsonData] };
	});
}

export function refineTraitsData(jsonData: { [x: string]: any }): NewTraitJson[] {
	return Object.keys(jsonData).map((key) => {
		return { name: key, description: jsonData[key as keyof typeof jsonData] };
	});
}

export function refineFumbleData(jsonData: { Roll: string; Result: string }[]): NewFumbleJson[] {
	return jsonData.map((fumbleData) => {
		return {
			roll: parseNumberOrText(fumbleData.Roll),
			result: fumbleData.Result,
		};
	});
}

export function refineNamesData(
	jsonData: {
		"1d100": string;
		"Low Gothic": string;
		"High Gothic": string;
		Archaic: string;
		Informal: string;
		Esoteric: string;
	}[],
): NewNameJson[] {
	return jsonData.map((nameData) => {
		return {
			roll: parseNumberRange(nameData["1d100"]),
			lowGothic: nameData["Low Gothic"],
			highGothic: nameData["High Gothic"],
			archaic: nameData.Archaic,
			esoteric: nameData.Esoteric,
			informal: nameData.Informal,
		};
	});
}

export function refineHitLocationsData(
	jsonData: {
		"Units Result": string;
		Location: string;
	}[],
): NewHitLocationsJson[] {
	return jsonData.map((hitLocation) => {
		return {
			roll: parseNumberRange(hitLocation["Units Result"]),
			location: hitLocation.Location,
		};
	});
}

export function refineInjuriesData(
	jsonData: {
		Location: string;
		Minor: string;
		Major: string;
	}[],
): NewInjuriesJson[] {
	return jsonData.map((injuryData) => {
		return {
			location: injuryData.Location,
			minor: injuryData.Minor,
			major: injuryData.Major,
		};
	});
}

export function refineMedicalServicesData(
	jsonData: {
		Quality: string;
		Cost: string;
		Medicae: string;
		"Additional Resources": string;
		Examples: string;
		Source: string;
	}[],
): NewMedicalServiceJson[] {
	return jsonData.map((medServiceData) => {
		//TODO: Map this to an array
		const addResourceValue =
			medServiceData["Additional Resources"] !== "-"
				? [medServiceData["Additional Resources"]]
				: undefined;

		return {
			quality: medServiceData.Quality,
			cost: parseNumberOrText(medServiceData.Cost),
			medicae: parseNumberOrText(medServiceData.Medicae),
			additionalResources: addResourceValue,
			examples: medServiceData.Examples,
			source: medServiceData.Source,
		};
	});
}

export function refinePerilsOfTheWarpData(
	jsonData: { "1d100": string; Corruption: string; Peril: string }[],
): NewPerilsOfTheWarpJson[] {
	return jsonData.map((perilData) => {
		return {
			roll: parseNumberRange(perilData["1d100"]),
			corruption: parseNumberOrText(perilData.Corruption),
			peril: perilData.Peril,
		};
	});
}

export function refinePsychicPhenomenaData(
	jsonData: { "1d100": string; Phenomenon: string; Lingering: string }[],
): NewPsychicPhenomenaJson[] {
	return jsonData.map((psyPhenoData) => {
		return {
			roll: parseNumberRange(psyPhenoData["1d100"]),
			phenomenon: psyPhenoData.Phenomenon,
			lingering: psyPhenoData.Lingering.includes("-") ? undefined : psyPhenoData.Lingering,
		};
	});
}

export function refineCharacteristicImprovementData(
	jsonData: { "New Value": string; "Cost per Advance": number }[],
): NewCharacteristicImprovementJsonProp[] {
	return jsonData.map((charImpData) => {
		return {
			newValue: parseNumberRange(charImpData["New Value"]),
			costPerAdvance: charImpData["Cost per Advance"],
		};
	});
}
export function refineSkillSpecialisationData(
	jsonData: {
		Advances: number;
		"Skill Total Increase": string;
		"XP Cost": number;
		"Cumulative XP Cost": number;
	}[],
): NewSkillSpecialisationJsonProp[] {
	return jsonData.map((skillSpecData) => {
		return {
			advances: skillSpecData.Advances,
			totalIncrease: parseNumberOrText(skillSpecData["Skill Total Increase"]),
			xpCost: skillSpecData["XP Cost"],
			totalXpCost: skillSpecData["Cumulative XP Cost"],
		};
	});
}
