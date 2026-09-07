import clothingData from "@/data/equipment/clothingAndPersonalGear.json";
import medicaeData from "@/data/equipment/medicaeEquipment.json";
import toolsData from "@/data/equipment/tools.json";
import type { NewEquipmentJson } from "@/types/json/JsonDataTypes";

export type EquipmentPageData = {
	clothing: NewEquipmentJson[];
	medicae: NewEquipmentJson[];
	tools: NewEquipmentJson[];
};

export class EquipmentService {
	static getClothingData(): NewEquipmentJson[] {
		return clothingData;
	}

	static getMedicaeData(): NewEquipmentJson[] {
		return medicaeData;
	}

	static getToolsData(): NewEquipmentJson[] {
		return toolsData;
	}

	static getEquipmentPageData(): EquipmentPageData {
		return {
			clothing: this.getClothingData(),
			medicae: this.getMedicaeData(),
			tools: this.getToolsData(),
		};
	}
}
