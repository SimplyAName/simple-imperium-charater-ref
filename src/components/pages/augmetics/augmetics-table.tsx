import { createCustomColumns } from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { NewAugmeticsJson } from "@/types/json/JsonDataTypes";

type TravelTableProps = {
	augmeticsData: NewAugmeticsJson[];
	caption?: string;
};

export function AugmeticsTable(travelTableProps: TravelTableProps & React.ComponentProps<"table">) {
	const { augmeticsData, caption, ...forwardProps } = travelTableProps;

	const columns = createCustomColumns<NewAugmeticsJson>(
		augmeticsData[0] ? Object.keys(augmeticsData[0]) : [],
	);

	return (
		<div {...forwardProps}>
			<DataTable
				columns={columns}
				data={augmeticsData}
				caption={caption}
				wrapColumns={["effect"]}
			/>
		</div>
	);
}
