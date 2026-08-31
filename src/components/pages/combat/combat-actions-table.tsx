import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import type { NewCombatActionJson } from "@/types/json/JsonDataTypes";

type CombatActionTableProps = {
	combatActions: NewCombatActionJson[];
	caption?: string;
};

export function CombatActionsTable(
	combatActionTableProps: CombatActionTableProps & React.ComponentProps<"table">,
) {
	const { combatActions, caption, ...forwardProps } = combatActionTableProps;

	return (
		<Table {...forwardProps}>
			{caption ? <TableCaption>{caption}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead className="text-left">Name</TableHead>
					<TableHead className="text-left">Description</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{combatActions.map((row) => (
					<TableRow key={`${row.name}`} className="text-left">
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.description}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
