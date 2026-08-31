import accommodationsServicesJson from "@/data/services/accommodationsServices.json";
import medicalServicesJson from "@/data/services/medicalServices.json";
import provisionsServicesJson from "@/data/services/provisionsServices.json";
import cityTravelJson from "@/data/services/travel/cityHiveTravel.json";
import interstellarTravelJson from "@/data/services/travel/interstellarTravel.json";
import planetaryTravelJson from "@/data/services/travel/planetaryTravel.json";
import systemTravelJson from "@/data/services/travel/systemTravel.json";
import type { NewMedicalServiceJson, NewServiceJson } from "@/types/json/JsonDataTypes";

// Going through a service so functionality can be extended in future to parse files better for more functionailty

export type AllServiceData = {
	medicalData: NewMedicalServiceJson[];
	accommodationData: NewServiceJson[];
	provisionData: NewServiceJson[];
	travel: {
		city: NewServiceJson[];
		planet: NewServiceJson[];
		system: NewServiceJson[];
		interstellar: NewServiceJson[];
	};
};

//TODO: Extract this to an interface for better architecture in the future with a possible db
export class ServiceDataService {
	constructor() {}

	static getMedicalServices(): NewMedicalServiceJson[] {
		return medicalServicesJson;
	}

	static getAccommodations(): NewServiceJson[] {
		return accommodationsServicesJson;
	}

	static getProvisions(): NewServiceJson[] {
		return provisionsServicesJson;
	}

	static getCityTravel(): NewServiceJson[] {
		return cityTravelJson;
	}

	static getPlanetaryTravel(): NewServiceJson[] {
		return planetaryTravelJson;
	}

	static getSystemTravel(): NewServiceJson[] {
		return systemTravelJson;
	}

	static getInterstellarTravel(): NewServiceJson[] {
		return interstellarTravelJson;
	}

	static getAllServiceData(): AllServiceData {
		return {
			medicalData: this.getMedicalServices(),
			accommodationData: this.getAccommodations(),
			provisionData: this.getProvisions(),
			travel: {
				city: this.getCityTravel(),
				planet: this.getPlanetaryTravel(),
				system: this.getSystemTravel(),
				interstellar: this.getInterstellarTravel(),
			},
		};
	}
}
