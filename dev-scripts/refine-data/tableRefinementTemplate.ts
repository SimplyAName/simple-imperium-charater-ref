import { generateJsonFile } from "../utils/generate-json-file";

export type TableRow = Record<string, string | number | boolean | null>;

export type RefinedTable = TableRow[];

/** Use this for narrative tables after deciding which columns are numeric. */
export function refineTableData<T extends TableRow>(rows: T[], filename: string): Promise<void> {
	return generateJsonFile(rows, filename);
}
