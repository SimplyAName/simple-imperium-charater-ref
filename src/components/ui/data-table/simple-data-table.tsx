import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";

type SimpleDataTableProps<T extends Record<string, unknown>> = {
	data: T[];
	caption?: string;
	wrapColumns?: Array<keyof T>;
} & React.ComponentProps<"div">;

export function SimpleDataTable<T extends Record<string, unknown>>({
	data,
	caption,
	wrapColumns,
	children,
	...forwardProps
}: SimpleDataTableProps<T>) {
	const columns = simpleDataColumnsFactory(extractColumnKeys(data));

	return (
		<div {...forwardProps}>
			{children}
			<DataTable columns={columns} data={data} caption={caption} wrapColumns={wrapColumns} />
		</div>
	);
}
