import { mkdir, writeFile } from "fs/promises";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

export async function generateJsonFile(jsonData: object, filename: string) {
	const outputPath = resolve(dirname(fileURLToPath(import.meta.url)), "../../src/data", filename);
	await mkdir(dirname(outputPath), { recursive: true });
	await writeFile(outputPath, JSON.stringify(jsonData, null, 2) + "\n");
}
