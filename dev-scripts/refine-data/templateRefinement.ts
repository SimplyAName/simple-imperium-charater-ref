import { generateJsonFile } from "../utils/generateJsonFile";

type NewTemplateJson = {
	name: string;
	cost: number;
	availability: string;
	effect: string;
	source: string;
};

export function refineTemplateData(
	jsonData: { name: string; cost: string; availability: string; effect: string; source: string }[],
	filename = "template.json",
) {
	const newTemplateJsonData: NewTemplateJson[] = [];

	for (const template of jsonData) {
		const newTemplateJson: NewTemplateJson = {
			name: template.name,
			cost: Number.parseInt(template.cost),
			availability: template.availability,
			effect: template.effect,
			source: template.source,
		};

		newTemplateJsonData.push(newTemplateJson);
	}

	return generateJsonFile(newTemplateJsonData, filename);
}
