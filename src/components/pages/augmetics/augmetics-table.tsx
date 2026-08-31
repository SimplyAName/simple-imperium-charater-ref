import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import type { NewAugmeticsJson } from "@/types/json/JsonDataTypes";

type TravelTableProps = {
	augmeticsData: NewAugmeticsJson[];
	captionText?: string;
};

export function AugmeticsTable(travelTableProps: TravelTableProps & React.ComponentProps<"table">) {
	const { augmeticsData, captionText, ...forwardProps } = travelTableProps;

	return (
		<Table {...forwardProps}>
			{captionText ? <TableCaption>{captionText}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Effect</TableHead>
					<TableHead>Availability</TableHead>
					<TableHead>Cost</TableHead>
					<TableHead>Source</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{augmeticsData.map((row) => (
					<TableRow key={`${row.name}`} className="text-left">
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.effect}</TableCell>
						<TableCell>{row.availability}</TableCell>
						<TableCell>{row.cost}</TableCell>
						<TableCell>{row.source}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
