import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { NewArmourJson } from "@/types/json/JsonDataTypes";

type ArmourTableProps = {
	armour: NewArmourJson[];
	captionText?: string;
};

export function ArmourTable(armourProps: ArmourTableProps & React.ComponentProps<"table">) {
	const { armour: armourData, captionText, ...forwardProps } = armourProps;
	const columns = simpleDataColumnsFactory<NewArmourJson>(extractColumnKeys(armourData));

	return (
		<div {...forwardProps}>
			<DataTable
				columns={columns}
				data={armourData}
				caption={captionText}
				wrapColumns={["locations", "traits"]}
			/>
		</div>
	);
}
