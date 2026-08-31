import accomodationsServicesJson from "./archiveData/accomodationsServices.json" with { type: "json" };
import armour from "./archiveData/armour.json" with { type: "json" };
import armourModifications from "./archiveData/armourModifications.json" with { type: "json" };
import augmetics from "./archiveData/augmetics.json" with { type: "json" };
import cityHiveTravel from "./archiveData/cityHiveTravel.json" with { type: "json" };
import clothingAndPersonalGear from "./archiveData/clothingAndPersonalGear.json" with { type: "json" };
import combatActions from "./archiveData/combatActions.json" with { type: "json" };
import conditions from "./archiveData/conditions.json" with { type: "json" };
import criticalWounds from "./archiveData/criticalWounds.json" with { type: "json" };
import customAmmunitions from "./archiveData/customAmmunitions.json" with { type: "json" };
import environmentalTraits from "./archiveData/environmentalTraits.json" with { type: "json" };
import explosiveWeapons from "./archiveData/explosiveWeapons.json" with { type: "json" };
import forceFields from "./archiveData/forceFields.json" with { type: "json" };
import fumbles from "./archiveData/fumbles.json" with { type: "json" };
import hitLocations from "./archiveData/hitLocations.json" with { type: "json" };
import injuries from "./archiveData/injuries.json" with { type: "json" };
import interstellarTravel from "./archiveData/interstellarTravel.json" with { type: "json" };
import medicaeEquipment from "./archiveData/medicaeEquipement.json" with { type: "json" };
import medicalServices from "./archiveData/medicalServices.json" with { type: "json" };
import meleeWeapons from "./archiveData/meleeWeapons.json" with { type: "json" };
import names from "./archiveData/names.json" with { type: "json" };
import perilsOfTheWarp from "./archiveData/perilsOfTheWarp.json" with { type: "json" };
import planetaryTravel from "./archiveData/planetaryTravel.json" with { type: "json" };
import provisionsServices from "./archiveData/provisionsServices.json" with { type: "json" };
import psychicPhenomena from "./archiveData/psychicPhenomena.json" with { type: "json" };
import psychicDetailProfiles from "./archiveData/psyDetailProfiles.json" with { type: "json" };
import psychicPowers from "./archiveData/psyPowers.json" with { type: "json" };
import rangedWeapons from "./archiveData/rangedWeapons.json" with { type: "json" };
import skills from "./archiveData/skills.json" with { type: "json" };
import systemTravel from "./archiveData/systemTravel.json" with { type: "json" };
import talents from "./archiveData/talents.json" with { type: "json" };
import toolDetailProfiles from "./archiveData/toolDetailProfiles.json" with { type: "json" };
import tools from "./archiveData/tools.json" with { type: "json" };
import traits from "./archiveData/traits.json" with { type: "json" };
import weaponModifications from "./archiveData/weaponModifications.json" with { type: "json" };
import xpCosts from "./archiveData/xpCosts.json" with { type: "json" };
import { createCharacteristicData } from "./create-data/createCharacteristicData";
import { createOriginData } from "./create-data/createOriginData";
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
import { refineSkillsData } from "./refine-data/skillsRefinement";
import { weaponModificationsRefinement } from "./refine-data/weaponModificationsRefinement";
import { generateJsonFile } from "./utils/generateJsonFile";

export function runAllRefinements() {
	return Promise.all([
		refineServiceData(accomodationsServicesJson, "services/accommodationsServices.json"),
		refineArmourModificationsData(armourModifications),
		refineArmourData(armour),
		refineAugmeticsData(augmetics),
		refinePersonalGearData(clothingAndPersonalGear),
		generateJsonFile(refineSkillsData(skills), "skills.json"),
		refineServiceData(cityHiveTravel, "services/travel/cityHiveTravel.json"),
		refineServiceData(planetaryTravel, "services/travel/planetaryTravel.json"),
		refineServiceData(systemTravel, "services/travel/systemTravel.json"),
		refineServiceData(interstellarTravel, "services/travel/interstellarTravel.json"),
		refineServiceData(provisionsServices, "services/provisionsServices.json"),
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
		generateJsonFile(refineMedicalServicesData(medicalServices), "services/medicalServices.json"),
		generateJsonFile(refinePerilsOfTheWarpData(perilsOfTheWarp), "perilsOfTheWarp.json"),
		generateJsonFile(refinePsychicPhenomenaData(psychicPhenomena), "psychicPhenomena.json"),
		generateJsonFile(refinePsychicPowersData(psychicPowers), "psychicPowers.json"),
		generatePsyProfileFiles(refinePsychicDetailProfilesData(psychicDetailProfiles)),
		generateJsonFile(refineTalentData(talents), "talents.json"),
		generateJsonFile(
			weaponModificationsRefinement(weaponModifications),
			"weaponModifications.json",
		),

		generateJsonFile(createCharacteristicData(), "character/characteristics.json"),
		generateJsonFile(createOriginData(), "character/creation/origin.json"),
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
