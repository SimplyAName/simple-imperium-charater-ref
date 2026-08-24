import type { NumberRange } from "../NumberRange";

export type NewCriticalWoundsJson = {
	roll: number | NumberRange;
	description: string;
	effects: string;
	treatment: string;
};

export type NewServiceJson = {
	quality: string;
	cost: number;
	examples: string;
	source: string;
};

export type NewMedicalServiceJson = {
	medicae: number;
	additionalResources?: string[];
} & NewServiceJson;

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
	traits?: NewTraitJsonProp[];
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
	traits?: NewTraitJsonProp[];
	source: string;
};

export type NewAmmunitionJson = {
	name: string;
	damage: number;
	cost: number;
	availability: string;
	usedWith: string;
	traits?: NewTraitJsonProp[];
	source: string;
};

export type NewPerilsOfTheWarpJson = {
	roll: NumberRange;
	corruption: number;
	peril: string;
};

export type NewInjuriesJson = {
	location: string;
	minor: string;
	major: string;
};

export type NewHitLocationsJson = {
	roll: NumberRange | number;
	location: string;
};

export type NewNameJson = {
	roll: NumberRange;
	lowGothic: string;
	highGothic: string;
	archaic: string;
	informal: string;
	esoteric: string;
};

export type NewFumbleJson = {
	roll: number;
	result: string;
};

export type NewTraitJsonProp = {
	name: string;
	value?: number;
};

export type NewCharacteristicImprovementJsonProp = {
	newValue: NumberRange;
	costPerAdvance: number;
};

export type NewSkillSpecialisationJsonProp = {
	advances: number;
	totalIncrease: number;
	xpCost: number;
	totalXpCost: number;
};

export type NewPsychicPhenomenaJson = {
	roll: NumberRange | number;
	phenomenon: string;
	lingering?: string;
};

export type NewToolDetailProfileJson = {
	name: string;
	specialisation: string;
	damage: number;
	bonus: string;
	encumbrance: number;
	cost: number;
	availability: string;
	traits?: NewTraitJsonProp[];
	source: string;
};

export type NewCombatActionJson = {
	name: string;
	description: string;
};

export type NewConditionJson = {
	name: string;
	description: string;
};

export type NewEnvironmentalTraitJson = {
	name: string;
	description: string;
};

export type NewTraitJson = {
	name: string;
	description: string;
};
