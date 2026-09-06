"use client";

import { createColumnHelper, type ColumnHelper } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header";
import { type DataTableFeatures } from "@/components/ui/data-table/data-table-features";

export function createCustomColumnHelper<T extends Record<string, unknown>>() {
	const columnHelper = createColumnHelper<DataTableFeatures, T>();

	return columnHelper;
}

export function createCustomColumns<T extends Record<string, unknown>>(columnKeys: Array<keyof T>) {
	const columnHelper = createColumnHelper<DataTableFeatures, T>();

	const colArray = columnKeys.map((columnKey) => {
		return createTableColumn(
			columnHelper,
			columnKey.toString().charAt(0).toUpperCase() + columnKey.toString().slice(1),
			columnKey as string,
		);
	});

	return columnHelper.columns(colArray);
}

function createTableColumn<T extends Record<string, unknown>>(
	columnHelper: ColumnHelper<DataTableFeatures, T>,
	title: string,
	accessorKey: string,
) {
	return columnHelper.accessor(accessorKey as any, {
		header: ({ column, table }: { column: any; table: any }) => (
			<DataTableColumnHeader column={column} table={table} title={title} />
		),
	});
}
