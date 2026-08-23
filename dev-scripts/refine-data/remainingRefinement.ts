import combatActions from "../../src/data/archiveData/combatActions.json" with { type: "json" };
import conditions from "../../src/data/archiveData/conditions.json" with { type: "json" };
import customAmmunitions from "../../src/data/archiveData/customAmmunitions.json" with { type: "json" };
import environmentalTraits from "../../src/data/archiveData/environmentalTraits.json" with { type: "json" };
import explosiveWeapons from "../../src/data/archiveData/explosiveWeapons.json" with { type: "json" };
import forceFields from "../../src/data/archiveData/forceFields.json" with { type: "json" };
import medicaeEquipment from "../../src/data/archiveData/medicaeEquipement.json" with { type: "json" };
import meleeWeapons from "../../src/data/archiveData/meleeWeapons.json" with { type: "json" };
import rangedWeapons from "../../src/data/archiveData/rangedWeapons.json" with { type: "json" };
import toolDetailProfiles from "../../src/data/archiveData/toolDetailProfiles.json" with { type: "json" };
import tools from "../../src/data/archiveData/tools.json" with { type: "json" };
import { generateJsonFile } from "../utils/generate-json-file";
import { extractValueFromBrackets } from "../utils/split-bracket-props";
import { extractTraitArray, type NewTraitJson } from "./traits/extractTraitArray";

export type NewEquipmentJson = {
	name: string;
	cost: number;
	availability: string;
	encumbrance: number;
	effect: string;
	source: string;
};

export type NewWeaponJson = {
	name: string;
	specialisation: string;
	damage: number;
	range?: string;
	magazine?: number;
	encumbrance: number;
	cost: number;
	magazineCost?: number;
	availability: string;
	traits?: NewTraitJson[];
	source: string;
};

export type NewMeleeWeaponJson = {
	name: string;
	specialisation: string;
	damage: number;
	bonus: string;
	range?: string;
	magazine?: number;
	encumbrance: number;
	cost: number;
	magazineCost?: number;
	availability: string;
	traits?: NewTraitJson[];
	source: string;
};

export type NewAmmunitionJson = {
	name: string;
	damage: number;
	cost: number;
	availability: string;
	usedWith: string;
	traits?: NewTraitJson[];
	source: string;
};

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

export type NewToolDetailProfileRecord = {
	name: string;
	specialisation: string;
	damage: number;
	bonus: string;
	encumbrance: number;
	cost: number;
	availability: string;
	traits?: NewTraitJson[];
	source: string;
};

function parseNumberOrText(value: string | number): number {
	if (typeof value === "number") return value;
	return Number.parseInt(value, 10);
}

function parseMeleeWeaponDamage(value: string): { damage: number; bonus: string } {
	const split = value.split("+");

	return {
		damage: parseNumberOrText(split[0]),
		bonus: split[1],
	};
}

function parseRequiredNumber(value: string | number, fieldName: string): number {
	const parsedValue = typeof value === "number" ? value : Number.parseInt(value, 10);
	if (Number.isNaN(parsedValue)) {
		throw new Error(`Expected ${fieldName} to be numeric, received: ${value}`);
	}
	return parsedValue;
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

export type NewCombatActionRecord = {
	name: string;
	description: string;
};

export function refineCombatActionData(
	jsonData: { Name: string; Description: string }[],
): NewCombatActionRecord[] {
	return jsonData.map((field) => ({
		name: field.Name,
		description: field.Description,
	}));
}

export function runRemainingRefinements() {
	return Promise.all([
		generateJsonFile(refineEquipmentData(medicaeEquipment), "medicaeEquipement.json"),
		generateJsonFile(refineEquipmentData(tools), "tools.json"),
		generateJsonFile(refineMeleeWeaponData(meleeWeapons), "meleeWeapons.json"),
		generateJsonFile(refineWeaponData(rangedWeapons), "rangedWeapons.json"),
		generateJsonFile(refineWeaponData(explosiveWeapons), "explosiveWeapons.json"),
		generateJsonFile(refineAmmunitionData(customAmmunitions), "customAmmunitions.json"),
		generateJsonFile(refineForceFieldData(forceFields), "forceFields.json"),
		generateJsonFile(refineCombatActionData(combatActions), "combatActions.json"),
		generateJsonFile(refineEnvironmentalTraitData(environmentalTraits), "environmentalTraits.json"),
		generateJsonFile(refineConditionData(conditions), "conditions.json"),
		generateJsonFile(refineToolDetailProfilesData(toolDetailProfiles), "toolDetailProfiles.json"),
	]);
}
function refineToolDetailProfilesData(
	jsonData: {
		id: string;
		type: string;
		headers: string[];
		rows: { Spec: string; DMG: string; Cost: string; Avail: string; Enc: string; Traits: string }[];
	}[],
): NewToolDetailProfileRecord[] {
	return jsonData.flatMap((toolDetailProfile) => {
		const newToolDetailProfileName = toolDetailProfile.id;
		const newToolDetailProfileSource = "Adeptus Mechanicus Player's Guide";

		return toolDetailProfile.rows.map((toolDetailProfileData): NewToolDetailProfileRecord => {
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

export type NewEnvironmentalTraitRecord = {
	name: string;
	description: string;
};

function refineEnvironmentalTraitData(
	jsonData: { Name: string; Description: string }[],
): NewEnvironmentalTraitRecord[] {
	return jsonData.map((field) => ({
		name: field.Name,
		description: field.Description,
	}));
}

export type NewConditionRecord = {
	name: string;
	description: string;
};

function refineConditionData(jsonData: {
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
}): NewConditionRecord[] {
	return Object.keys(jsonData).map((key) => {
		return { name: key, description: jsonData[key as keyof typeof jsonData] };
	});
}
