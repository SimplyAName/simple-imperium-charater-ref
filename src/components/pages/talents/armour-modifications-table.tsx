import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { NewArmourModificationJson } from "@/types/json/JsonDataTypes";

type ArmourModificationsTableProps = {
	armourModifications: NewArmourModificationJson[];
	captionText?: string;
};

export function ArmourModificationsTable(
	armourModificationProps: ArmourModificationsTableProps & React.ComponentProps<"table">,
) {
	const { armourModifications, captionText, ...forwardProps } = armourModificationProps;
	const columns = simpleDataColumnsFactory<NewArmourModificationJson>(
		extractColumnKeys(armourModifications),
	);

	return (
		<div {...forwardProps}>
			<DataTable
				columns={columns}
				data={armourModifications}
				caption={captionText}
				wrapColumns={["effect"]}
			/>
		</div>
	);
}
