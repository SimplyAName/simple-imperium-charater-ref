import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import type { NewForceFieldJson } from "@/types/json/JsonDataTypes";

type ForceFieldsTableProps = {
	forceField: NewForceFieldJson[];
	captionText?: string;
};

export function ForceFieldsTable(
	forceFieldProps: ForceFieldsTableProps & React.ComponentProps<"table">,
) {
	const { forceField, captionText, ...forwardProps } = forceFieldProps;

	return (
		<Table {...forwardProps}>
			{captionText ? <TableCaption>{captionText}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Protection</TableHead>
					<TableHead>Overload</TableHead>
					<TableHead>Encumbrance</TableHead>
					<TableHead>Cost</TableHead>
					<TableHead>Availability</TableHead>
					<TableHead>Effect</TableHead>
					<TableHead>Source</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{forceField.map((row) => (
					<TableRow key={`${row.name}`} className="text-left">
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.protection}</TableCell>
						<TableCell>{row.overload}</TableCell>
						<TableCell>{row.encumbrance}</TableCell>
						<TableCell>{row.cost}</TableCell>
						<TableCell>{row.availability}</TableCell>
						<TableCell>{row.effect}</TableCell>
						<TableCell>{row.source}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
