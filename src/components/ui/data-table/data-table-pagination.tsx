import type { ReactTable, RowData } from "@tanstack/react-table";
import { cn } from "cn";

import { Button } from "../button";
import type { DataTableFeatures } from "./data-table-features";

export function DataTablePagination<TData extends RowData>({
	table,
	className,
}: {
	table: ReactTable<DataTableFeatures, TData>;
	className?: string;
}) {
	if (table.getPageCount() <= 1) {
		return null;
	}

	return (
		<div className={cn(`flex items-center justify-center-safe gap-2 py-2`, className)}>
			<Button
				variant="outline"
				size="sm"
				onClick={() => table.previousPage()}
				disabled={!table.getCanPreviousPage()}
			>
				Previous
			</Button>
			<p>
				{table.state.pagination.pageIndex + 1} of {table.getPageCount()}
			</p>
			<Button
				variant="outline"
				size="sm"
				onClick={() => table.nextPage()}
				disabled={!table.getCanNextPage()}
			>
				Next
			</Button>
		</div>
	);
}
