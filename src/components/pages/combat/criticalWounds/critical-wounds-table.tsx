import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { NewCriticalWoundJson } from "@/types/json/JsonDataTypes";
import { numberRangeToString } from "@/utils/string-utils";

type CriticalWoundTableProps = {
	criticalWounds: NewCriticalWoundJson[];
	caption?: string;
};

export function CriticalWoundsTable(
	criticalWoundProps: CriticalWoundTableProps & React.ComponentProps<"table">,
) {
	const { criticalWounds, caption, ...forwardProps } = criticalWoundProps;
	const columns = simpleDataColumnsFactory<NewCriticalWoundJson>(extractColumnKeys(criticalWounds));

	return (
		<div {...forwardProps}>
			<DataTable
				columns={columns}
				data={criticalWounds}
				caption={caption}
				wrapColumns={["description", "effects", "treatment"]}
			/>
		</div>
	);
}
