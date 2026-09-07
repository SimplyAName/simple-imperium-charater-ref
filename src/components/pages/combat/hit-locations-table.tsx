import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { NewHitLocationJson } from "@/types/json/JsonDataTypes";

type HitLocationTableProps = {
	hitLocations: NewHitLocationJson[];
	caption?: string;
};

export function HitLocationsTable(
	hitLocationTableProps: HitLocationTableProps & React.ComponentProps<"table">,
) {
	const { hitLocations, caption, ...forwardProps } = hitLocationTableProps;

	const columns = simpleDataColumnsFactory<NewHitLocationJson>(extractColumnKeys(hitLocations));

	return (
		<div {...forwardProps}>
			<DataTable columns={columns} data={hitLocations} caption={caption} />
		</div>
	);
}
