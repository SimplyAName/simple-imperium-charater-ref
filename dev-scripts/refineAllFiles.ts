import accomodationsServicesJson from "../src/data/archiveData/accomodationsServices.json" with { type: "json" };
import armour from "../src/data/archiveData/armour.json" with { type: "json" };
import armourModifications from "../src/data/archiveData/armourModifications.json" with { type: "json" };
import augmetics from "../src/data/archiveData/augmetics.json" with { type: "json" };
import cityHiveTravel from "../src/data/archiveData/cityHiveTravel.json" with { type: "json" };
import clothingAndPersonalGear from "../src/data/archiveData/clothingAndPersonalGear.json" with { type: "json" };
import combatActions from "../src/data/archiveData/combatActions.json" with { type: "json" };
import conditions from "../src/data/archiveData/conditions.json" with { type: "json" };
import criticalWounds from "../src/data/archiveData/criticalWounds.json" with { type: "json" };
import customAmmunitions from "../src/data/archiveData/customAmmunitions.json" with { type: "json" };
import environmentalTraits from "../src/data/archiveData/environmentalTraits.json" with { type: "json" };
import explosiveWeapons from "../src/data/archiveData/explosiveWeapons.json" with { type: "json" };
import forceFields from "../src/data/archiveData/forceFields.json" with { type: "json" };
import fumbles from "../src/data/archiveData/fumbles.json" with { type: "json" };
import hitLocations from "../src/data/archiveData/hitLocations.json" with { type: "json" };
import injuries from "../src/data/archiveData/injuries.json" with { type: "json" };
import interstellarTravel from "../src/data/archiveData/interstellarTravel.json" with { type: "json" };
import medicaeEquipment from "../src/data/archiveData/medicaeEquipement.json" with { type: "json" };
import medicalServices from "../src/data/archiveData/medicalServices.json" with { type: "json" };
import meleeWeapons from "../src/data/archiveData/meleeWeapons.json" with { type: "json" };
import names from "../src/data/archiveData/names.json" with { type: "json" };
import perilsOfTheWarp from "../src/data/archiveData/perilsOfTheWarp.json" with { type: "json" };
import planetaryTravel from "../src/data/archiveData/planetaryTravel.json" with { type: "json" };
import provisionsServices from "../src/data/archiveData/provisionsServices.json" with { type: "json" };
import psychicPhenomena from "../src/data/archiveData/psychicPhenomena.json" with { type: "json" };
import psychicDetailProfiles from "../src/data/archiveData/psyDetailProfiles.json" with { type: "json" };
import psychicPowers from "../src/data/archiveData/psyPowers.json" with { type: "json" };
import rangedWeapons from "../src/data/archiveData/rangedWeapons.json" with { type: "json" };
import skills from "../src/data/archiveData/skills.json" with { type: "json" };
import systemTravel from "../src/data/archiveData/systemTravel.json" with { type: "json" };
import talents from "../src/data/archiveData/talents.json" with { type: "json" };
import toolDetailProfiles from "../src/data/archiveData/toolDetailProfiles.json" with { type: "json" };
import tools from "../src/data/archiveData/tools.json" with { type: "json" };
import traits from "../src/data/archiveData/traits.json" with { type: "json" };
import weaponModifications from "../src/data/archiveData/weaponModifications.json" with { type: "json" };
import xpCosts from "../src/data/archiveData/xpCosts.json" with { type: "json" };
import { refineArmourModificationsData } from "./refine-data/armourModificationsRefinement";
import { refineArmourData } from "./refine-data/armourRefinement";
import { refineAugmeticsData } from "./refine-data/augmeticsRefinement";
import { refineCriticalWoundsData } from "./refine-data/criticalWoundsRefinement";
import { refinePersonalGearData } from "./refine-data/personalGearRefinement";
import {
	refineAmmunitionData,
	refineCharacteristicImprovementData as refineCharacteristicImprovementXpData,
	refineCombatActionData,
	refineConditionData,
	refineEnvironmentalTraitData,
	refineEquipmentData,
	refineForceFieldData,
	refineFumbleData,
	refineHitLocationsData,
	refineInjuriesData,
	refineMedicalServicesData,
	refineMeleeWeaponData,
	refineNamesData,
	refinePerilsOfTheWarpData,
	refinePsychicDetailProfilesData,
	refinePsychicPhenomenaData,
	refinePsychicPowersData,
	refineSkillSpecialisationData as refineSkillSpecialisationXpData,
	refineTalentData,
	refineToolDetailProfilesData,
	refineTraitsData,
	refineWeaponData,
	type PsychicDetailProfileJson,
} from "./refine-data/remainingRefinement";
import { refineServiceData } from "./refine-data/serviceRefinement";
import { refineSkillsData } from "./refine-data/specialisationsRefinement";
import { weaponModificationsRefinement } from "./refine-data/weaponModificationsRefinement";
import { generateJsonFile } from "./utils/generateJsonFile";

export function runAllRefinements() {
	return Promise.all([
		refineServiceData(accomodationsServicesJson, "accommodationsServices.json"),
		refineArmourModificationsData(armourModifications),
		refineArmourData(armour),
		refineAugmeticsData(augmetics),
		refinePersonalGearData(clothingAndPersonalGear),
		refineSkillsData(skills),
		refineServiceData(cityHiveTravel, "travel/cityHiveTravel.json"),
		refineServiceData(planetaryTravel, "travel/planetaryTravel.json"),
		refineServiceData(systemTravel, "travel/systemTravel.json"),
		refineServiceData(interstellarTravel, "travel/interstellarTravel.json"),
		refineServiceData(provisionsServices, "provisionsServices.json"),
		refineCriticalWoundsData(criticalWounds),
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
		generateJsonFile(refineTraitsData(traits), "traits.json"),
		generateJsonFile(refineFumbleData(fumbles), "fumbles.json"),
		generateJsonFile(refineNamesData(names.names.data), "names.json"),
		generateJsonFile(refineHitLocationsData(hitLocations), "hitLocations.json"),
		generateJsonFile(refineInjuriesData(injuries), "injuries.json"),
		generateJsonFile(
			refineCharacteristicImprovementXpData(xpCosts.characteristicImprovement.data),
			"xpCosts/characteristicImprovement.json",
		),
		generateJsonFile(
			refineSkillSpecialisationXpData(xpCosts.skillSpecialisation.data),
			"xpCosts/skillSpecialisation.json",
		),
		generateJsonFile(refineMedicalServicesData(medicalServices), "medicalServices.json"),
		generateJsonFile(refinePerilsOfTheWarpData(perilsOfTheWarp), "perilsOfTheWarp.json"),
		generateJsonFile(refinePsychicPhenomenaData(psychicPhenomena), "psychicPhenomena.json"),
		generateJsonFile(refinePsychicPowersData(psychicPowers), "psychicPowers.json"),
		generatePsyProfileFiles(refinePsychicDetailProfilesData(psychicDetailProfiles)),
		generateJsonFile(refineTalentData(talents), "talents.json"),
		generateJsonFile(
			weaponModificationsRefinement(weaponModifications),
			"weaponModifications.json",
		),
	]);
}

function generatePsyProfileFiles(input: PsychicDetailProfileJson) {
	for (const weaponProfile of input.weaponProfiles) {
		generateJsonFile(weaponProfile, `weaponProfiles/${createFileName(weaponProfile.name)}.json`);
	}

	for (const tableProfile of input.tableProfiles) {
		generateJsonFile(tableProfile, `tableProfiles/${createFileName(tableProfile.name)}.json`);
	}
}

function createFileName(nameString: string) {
	let fileName = nameString.replaceAll(" ", "");
	fileName = fileName.charAt(0)?.toLocaleLowerCase() + fileName.substring(1);
	return fileName;
}

runAllRefinements();
