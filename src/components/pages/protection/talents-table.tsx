import { createCustomColumns } from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { NewTalentJson } from "@/types/json/JsonDataTypes";

type TravelTableProps = {
	talentData: NewTalentJson[];
	caption?: string;
};

export function TalentsTable(travelTableProps: TravelTableProps & React.ComponentProps<"table">) {
	const { talentData, caption, ...forwardProps } = travelTableProps;

	const columns = createCustomColumns<NewTalentJson>(
		talentData[0] ? Object.keys(talentData[0]) : [],
	);

	return (
		<div {...forwardProps}>
			<DataTable
				columns={columns}
				data={talentData}
				caption={caption}
				wrapColumns={["description"]}
			/>
		</div>
	);
}
