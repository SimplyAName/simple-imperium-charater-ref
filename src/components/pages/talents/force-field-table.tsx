import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { NewForceFieldJson } from "@/types/json/JsonDataTypes";

type ForceFieldsTableProps = {
	forceField: NewForceFieldJson[];
	captionText?: string;
};

export function ForceFieldsTable(
	forceFieldProps: ForceFieldsTableProps & React.ComponentProps<"table">,
) {
	const { forceField, captionText, ...forwardProps } = forceFieldProps;
	const columns = simpleDataColumnsFactory<NewForceFieldJson>(extractColumnKeys(forceField));

	return (
		<div {...forwardProps}>
			<DataTable
				columns={columns}
				data={forceField}
				caption={captionText}
				wrapColumns={["effect"]}
			/>
		</div>
	);
}
