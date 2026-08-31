import type { CharacteristicJson } from "@/types/json/JsonDataTypes";

export function createCharacteristicData(): CharacteristicJson[] {
	return [
		{
			name: "Weapon Skill",
			short: "WS",
			description:
				"Weapon Skill measures your competence in all forms of close-quarters combat. Characters with high Weapon Skill are excellent warriors, renowned with a chainsword or even their bare hands. Weapon Skill is used when making a melee attack and defending in melee combat.",
		},
		{
			name: "Ballistic Skill",
			short: "BS",
			description:
				"Ballistic Skill measures your accuracy with all forms of ranged weapons. A high Ballistic Skill indicates a character is an excellent sharpshooter, someone to be rightly feared in any fire-fight or shoot-out. Ballistic Skill is used when making a ranged attack.",
		},
		{
			name: "Strength",
			short: "STR",
			description:
				"Strength measures your muscle and physical power. Characters with high Strength can lift heavy objects, climb sheer surfaces with ease, and deal more damage with melee weapons.",
		},
		{
			name: "Toughness",
			short: "TGH",
			description:
				"Toughness measures your health, stamina, and resistance. Exceptionally tough characters are hard to kill, can withstand poisons and toxins, and survive in the harshest environments.",
		},
		{
			name: "Agility",
			short: "AG",
			description:
				"This measures your physical coordination, reflexes, and overall body awareness. High Agility allows a character to move silently, act first in dangerous situations, and dodge incoming attacks.",
		},
		{
			name: "Intelligence",
			short: "INT",
			description:
				"Intelligence is your acumen, reason, and general knowledge. A character with a high Intelligence can recall huge volumes of data, correlate esoteric clues, or determine if an ancient archaeotech relic is genuine or not.",
		},
		{
			name: "Perception",
			short: "PER",
			description:
				"This measures your awareness and the acuteness of your senses. A character with high Perception can pick out a stray bolter shell casing left amidst an underhive morass, tell when someone is being deceitful, or be the first to spot danger.",
		},
		{
			name: "Willpower",
			short: "WIL",
			description:
				"Willpower measures a character's mental strength and resolve. High Willpower allows a character to overcome fear, and is called upon when wielding and resisting psychic powers.",
		},
		{
			name: "Fellowship",
			short: "FEL",
			description:
				"Fellowship measures your persuasiveness, ability to lead, and force of personality. Having a good Fellowship makes for a character who can ingratiate themself into a gathering of suspicious forge menials, make skilled trades with wily vendors, or cow others into obedience.",
		},
	];
}
