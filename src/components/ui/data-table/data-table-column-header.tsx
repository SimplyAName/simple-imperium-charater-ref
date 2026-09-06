import { type Column, type ReactTable, type RowData } from "@tanstack/react-table";
import { cn } from "cn";
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { type DataTableFeatures } from "./data-table-features";

interface DataTableColumnHeaderProps<
	TData extends RowData,
	TValue,
> extends React.HTMLAttributes<HTMLDivElement> {
	column: Column<DataTableFeatures, TData, TValue>;
	table: ReactTable<DataTableFeatures, TData>;
	title: string;
}

export function DataTableColumnHeader<TData extends RowData, TValue>({
	column,
	table,
	title,
	className,
}: DataTableColumnHeaderProps<TData, TValue>) {
	if (!column.getCanSort()) {
		return <div className={cn(className)}>{title}</div>;
	}

	return (
		<div className={cn("flex items-center gap-2", className)}>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<div className="flex flex-row items-center justify-center p-2">
						<span>{title}</span>
						<table.Subscribe selector={(state) => state.sorting}>
							{() =>
								column.getIsSorted() === "desc" ? (
									<ArrowDown />
								) : column.getIsSorted() === "asc" ? (
									<ArrowUp />
								) : (
									<ChevronsUpDown />
								)
							}
						</table.Subscribe>
					</div>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start">
					<DropdownMenuItem onClick={() => column.toggleSorting(false)}>
						<ArrowUp />
						Asc
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => column.toggleSorting(true)}>
						<ArrowDown />
						Desc
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
						<EyeOff />
						Hide
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
