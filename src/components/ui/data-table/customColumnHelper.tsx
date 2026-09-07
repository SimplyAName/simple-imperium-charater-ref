import { createColumnHelper, type ColumnHelper } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { type DataTableFeatures } from "@/components/ui/data-table/data-table-features";
import { isNumberRange } from "@/types/NumberRange";
import { arrayToFormattedString, numberRangeToString } from "@/utils/string-utils";

export function createDataColumnHelper<T extends Record<string, unknown>>() {
	const columnHelper = createColumnHelper<DataTableFeatures, T>();

	return columnHelper;
}

export function extractColumnKeys<T extends Record<string, unknown>>(data: T[]): Array<keyof T> {
	if (data.length === 0) {
		return [];
	}

	return Object.keys(data[0]) as Array<keyof T>;
}

export function simpleDataColumnsFactory<T extends Record<string, unknown>>(
	columnKeys: Array<keyof T>,
) {
	const columnHelper = createColumnHelper<DataTableFeatures, T>();

	const colArray = columnKeys.map((columnKey) => {
		const key = columnKey.toString();

		const splitKey = key.split(/(?=[A-Z])/g);

		splitKey[0] = splitKey[0].charAt(0).toUpperCase() + splitKey[0].slice(1);

		const title = splitKey.join(" ");

		return createDataTableColumn(columnHelper, {
			key,
			title,
		});
	});

	return columnHelper.columns(colArray);
}

function createDataTableColumn<T extends Record<string, unknown>>(
	columnHelper: ColumnHelper<DataTableFeatures, T>,
	customColumn: { key: string; title: string },
) {
	return columnHelper.accessor(customColumn.key as any, {
		header: ({ column, table }: { column: any; table: any }) => (
			<DataTableColumnHeader column={column} table={table} title={customColumn.title} />
		),
		cell: (info) => {
			const value = info.getValue();

			if (typeof value === "string" || typeof value === "number") {
				return value.toString();
			}

			if (Array.isArray(value)) {
				return arrayToFormattedString(value);
			}

			if (isNumberRange(value)) {
				return numberRangeToString(value);
			}

			return value;
		},
	});
}
