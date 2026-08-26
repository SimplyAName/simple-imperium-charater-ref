import accommodationsServicesJson from "@/data/services/accommodationsServices.json";
import medicalServicesJson from "@/data/services/medicalServices.json";
import provisionsServicesJson from "@/data/services/provisionsServices.json";
import type { NewMedicalServiceJson, NewServiceJson } from "@/types/json/JsonDataTypes";

// Going through a service so functionality can be extended in future to parse files better for more functionailty

export class ServiceDataService {
	constructor() {}

	static getMedicalServices(): NewMedicalServiceJson[] {
		return medicalServicesJson;
	}

	static getAccommodationsServices(): NewServiceJson[] {
		return accommodationsServicesJson;
	}

	static getProvisionsServices(): NewServiceJson[] {
		return provisionsServicesJson;
	}
	// TODO: Add travel services
}
