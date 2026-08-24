import accomodationsServicesJson from "../src/data/archiveData/accomodationsServices.json" with { type: "json" };
import armour from "../src/data/archiveData/armour.json" with { type: "json" };
import armourModifications from "../src/data/archiveData/armourModifications.json" with { type: "json" };
import augmetics from "../src/data/archiveData/augmetics.json" with { type: "json" };
import cityHiveTravel from "../src/data/archiveData/cityHiveTravel.json" with { type: "json" };
import clothingAndPersonalGear from "../src/data/archiveData/clothingAndPersonalGear.json" with { type: "json" };
import criticalWounds from "../src/data/archiveData/criticalWounds.json" with { type: "json" };
import interstellarTravel from "../src/data/archiveData/interstellarTravel.json" with { type: "json" };
import planetaryTravel from "../src/data/archiveData/planetaryTravel.json" with { type: "json" };
import provisionsServices from "../src/data/archiveData/provisionsServices.json" with { type: "json" };
import skills from "../src/data/archiveData/skills.json" with { type: "json" };
import systemTravel from "../src/data/archiveData/systemTravel.json" with { type: "json" };
import { refineArmourModificationsData } from "./refine-data/armourModificationsRefinement";
import { refineArmourData } from "./refine-data/armourRefinement";
import { refineAugmeticsData } from "./refine-data/augmeticsRefinement";
import { refineCriticalWoundsData } from "./refine-data/criticalWoundsRefinement";
import { refinePersonalGearData } from "./refine-data/personalGearRefinement";
import { runRemainingRefinements } from "./refine-data/remainingRefinement";
import { refineServiceData } from "./refine-data/serviceRefinement";
import { refineSkillsData } from "./refine-data/specialisationsRefinement";

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
		runRemainingRefinements(),
	]);
}

runAllRefinements();
