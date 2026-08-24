import accomodationsServicesJson from "../src/data/archiveData/accomodationsServices.json" with { type: "json" };
import armour from "../src/data/archiveData/armour.json" with { type: "json" };
import armourModifications from "../src/data/archiveData/armourModifications.json" with { type: "json" };
import augmetics from "../src/data/archiveData/augmetics.json" with { type: "json" };
import cityHiveTravel from "../src/data/archiveData/cityHiveTravel.json" with { type: "json" };
import clothingAndPersonalGear from "../src/data/archiveData/clothingAndPersonalGear.json" with { type: "json" };
import criticalWounds from "../src/data/archiveData/criticalWounds.json" with { type: "json" };
import interstellarTravel from "../src/data/archiveData/interstellarTravel.json" with { type: "json" };
import planetaryTravel from "../src/data/archiveData/planetaryTravel.json" with { type: "json" };
import skills from "../src/data/archiveData/skills.json" with { type: "json" };
import systemTravel from "../src/data/archiveData/systemTravel.json" with { type: "json" };
import { refineArmourModificationsData } from "./refine-data/accommodationsServicesRefinement";
import { refineTravelData } from "./refine-data/allTravelRefinement";
import { refineAccommodationData } from "./refine-data/armourModificationsRefinement";
import { refineArmourData } from "./refine-data/armourRefinement";
import { refineAugmeticsData } from "./refine-data/augmeticsRefinement";
import { refineCriticalWoundsData } from "./refine-data/criticalWoundsRefinement";
import { refinePersonalGearData } from "./refine-data/personalGearRefinement";
import { runRemainingRefinements } from "./refine-data/remainingRefinement";
import { refineSkillsData } from "./refine-data/specialisationsRefinement";

export function runAllRefinements() {
	return Promise.all([
		refineAccommodationData(accomodationsServicesJson),
		refineArmourModificationsData(armourModifications),
		refineArmourData(armour),
		refineAugmeticsData(augmetics),
		refinePersonalGearData(clothingAndPersonalGear),
		refineSkillsData(skills),
		refineTravelData(cityHiveTravel, "cityHiveTravel.json"),
		refineTravelData(planetaryTravel, "planetaryTravel.json"),
		refineTravelData(systemTravel, "systemTravel.json"),
		refineTravelData(interstellarTravel, "interstellarTravel.json"),
		refineCriticalWoundsData(criticalWounds),
		runRemainingRefinements(),
	]);
}

runAllRefinements();
