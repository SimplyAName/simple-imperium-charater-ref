import perilsData from "@/data/psychic/perilsOfTheWarp.json";
import phenomenaData from "@/data/psychic/psychicPhenomena.json";
import powersData from "@/data/psychic/psychicPowers.json";
import type {
	NewPerilsOfTheWarpJson,
	NewPsychicPhenomenaJson,
	NewPsychicPowersJson,
} from "@/types/json/JsonDataTypes";

export type PsychicPageData = {
	perils: NewPerilsOfTheWarpJson[];
	phenomena: NewPsychicPhenomenaJson[];
	powers: NewPsychicPowersJson[];
};

export class PsychicService {
	static getPerilsData(): NewPerilsOfTheWarpJson[] {
		return perilsData;
	}

	static getPhenomenaData(): NewPsychicPhenomenaJson[] {
		return phenomenaData;
	}

	static getPowersData(): NewPsychicPowersJson[] {
		return powersData;
	}

	static getPsychicPageData(): PsychicPageData {
		return {
			perils: this.getPerilsData(),
			phenomena: this.getPhenomenaData(),
			powers: this.getPowersData(),
		};
	}
}
