import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { CharacteristicJson } from "@/types/json/JsonDataTypes";

type CharacteristicTableProps = {
	characteristicsData: CharacteristicJson[];
	captionText?: string;
};

export function CharacteristicsTable(
	characteristicTableProps: CharacteristicTableProps & React.ComponentProps<"table">,
) {
	const { characteristicsData, captionText, ...forwardProps } = characteristicTableProps;
	const columns = simpleDataColumnsFactory<CharacteristicJson>(
		extractColumnKeys(characteristicsData),
	);

	return (
		<div {...forwardProps}>
			<DataTable
				columns={columns}
				data={characteristicsData}
				caption={captionText}
				wrapColumns={["description"]}
			/>
		</div>
	);
}
