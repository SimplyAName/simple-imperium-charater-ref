import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { NewTalentJson } from "@/types/json/JsonDataTypes";

type TravelTableProps = {
	talentData: NewTalentJson[];
	caption?: string;
};

export function TalentsTable(travelTableProps: TravelTableProps & React.ComponentProps<"table">) {
	const { talentData, caption, ...forwardProps } = travelTableProps;

	const columns = simpleDataColumnsFactory<NewTalentJson>(extractColumnKeys(talentData));

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
