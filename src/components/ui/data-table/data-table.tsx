"use client";

import {
	useTable,
	type ColumnDef,
	type ColumnFiltersState,
	type ColumnVisibilityState,
	type RowData,
	type SortingState,
} from "@tanstack/react-table";
import { useTanStackTableDevtools } from "@tanstack/react-table-devtools";
import { useState } from "react";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { features, type DataTableFeatures } from "./data-table-features";
import { DataTablePagination } from "./data-table-pagination";

interface DataTableProps<TData extends RowData> {
	columns: ColumnDef<DataTableFeatures, TData>[];
	data: TData[];
	caption?: string;
	wrapColumns?: Array<keyof TData>;
}

export function DataTable<TData extends RowData>({
	columns,
	data,
	caption,
	wrapColumns,
}: DataTableProps<TData>) {
	const table = useTable({
		key: "data-table",
		features,
		data,
		columns,
	});

	useTanStackTableDevtools(table);

	return (
		<div className="flex w-full flex-col gap-2 border">
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead key={header.id}>
										{header.isPlaceholder ? null : <table.FlexRender header={header} />}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
								{row.getVisibleCells().map((cell) => (
									<TableCell
										key={cell.id}
										className={
											wrapColumns?.includes(cell.column.id as keyof TData)
												? "wrap-break-word whitespace-normal"
												: "min-w-1/6"
										}
									>
										<table.FlexRender cell={cell} />
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
				{caption ? <TableCaption>{caption}</TableCaption> : null}
			</Table>
			<DataTablePagination table={table} className="border-t" />
		</div>
	);
}
