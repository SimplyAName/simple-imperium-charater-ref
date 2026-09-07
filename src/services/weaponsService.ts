import traitsData from "@/data/traits.json";
import customAmmunitionsData from "@/data/weapons/customAmmunitions.json";
import explosiveWeaponsData from "@/data/weapons/explosiveWeapons.json";
import meleeWeaponsData from "@/data/weapons/meleeWeapons.json";
import rangedWeaponsData from "@/data/weapons/rangedWeapons.json";
import weaponModificationsData from "@/data/weapons/weaponModifications.json";
import type {
	NewCustomAmmunitionJson,
	NewMeleeWeaponJson,
	NewTraitJson,
	NewRangedWeaponJson,
	NewWeaponModificationsJson,
	NewExplosiveWeaponJson,
} from "@/types/json/JsonDataTypes";

export type WeaponsPageData = {
	ammunition: NewCustomAmmunitionJson[];
	explosive: NewExplosiveWeaponJson[];
	melee: NewMeleeWeaponJson[];
	ranged: NewRangedWeaponJson[];
	modifications: NewWeaponModificationsJson[];
	traits: NewTraitJson[];
};

export class WeaponsService {
	static getAmmunitionData(): NewCustomAmmunitionJson[] {
		return customAmmunitionsData;
	}

	static getExplosiveWeaponsData(): NewExplosiveWeaponJson[] {
		return explosiveWeaponsData;
	}

	static getMeleeWeaponsData(): NewMeleeWeaponJson[] {
		return meleeWeaponsData;
	}

	static getRangedWeaponsData(): NewRangedWeaponJson[] {
		return rangedWeaponsData;
	}

	static getWeaponModificationsData(): NewWeaponModificationsJson[] {
		return weaponModificationsData;
	}

	static getTraitsData(): NewTraitJson[] {
		return traitsData;
	}

	static getWeaponsPageData(): WeaponsPageData {
		return {
			ammunition: this.getAmmunitionData(),
			explosive: this.getExplosiveWeaponsData(),
			melee: this.getMeleeWeaponsData(),
			ranged: this.getRangedWeaponsData(),
			modifications: this.getWeaponModificationsData(),
			traits: this.getTraitsData(),
		};
	}
}
