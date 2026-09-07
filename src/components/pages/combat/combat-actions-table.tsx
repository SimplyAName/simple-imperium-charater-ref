import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { NewCombatActionJson } from "@/types/json/JsonDataTypes";

type CombatActionTableProps = {
	combatActions: NewCombatActionJson[];
	caption?: string;
};

export function CombatActionsTable(
	combatActionTableProps: CombatActionTableProps & React.ComponentProps<"table">,
) {
	const { combatActions, caption, ...forwardProps } = combatActionTableProps;
	const columns = simpleDataColumnsFactory<NewCombatActionJson>(extractColumnKeys(combatActions));

	return (
		<div {...forwardProps}>
			<DataTable
				columns={columns}
				data={combatActions}
				caption={caption}
				wrapColumns={["description"]}
			/>
		</div>
	);
}
