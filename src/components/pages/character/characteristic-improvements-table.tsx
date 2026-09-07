import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { NewCharacteristicImprovementJson } from "@/types/json/JsonDataTypes";

type CharacteristicImprovementTableProps = {
	characteristicImprovementsData: NewCharacteristicImprovementJson[];
	captionText?: string;
};

export function CharacteristicImprovementsTable(
	characteristicImprovementTableProps: CharacteristicImprovementTableProps &
		React.ComponentProps<"table">,
) {
	const { characteristicImprovementsData, captionText, ...forwardProps } =
		characteristicImprovementTableProps;
	const columns = simpleDataColumnsFactory<NewCharacteristicImprovementJson>(
		extractColumnKeys(characteristicImprovementsData),
	);

	return (
		<div {...forwardProps}>
			<DataTable columns={columns} data={characteristicImprovementsData} caption={captionText} />
		</div>
	);
}
