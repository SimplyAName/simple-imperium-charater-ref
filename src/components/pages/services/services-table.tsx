import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import type { NewServiceJson } from "@/types/json/JsonDataTypes";

type TravelTableProps = {
	serviceData: NewServiceJson[];
	captionText?: string;
};

export function ServicesTable({
	serviceData,
	captionText,
}: TravelTableProps & React.ComponentProps<"table">) {
	return (
		<Table>
			{captionText ? <TableCaption>{captionText}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead>Quality</TableHead>
					<TableHead>Examples</TableHead>
					<TableHead>Cost</TableHead>
					<TableHead>Source</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{serviceData.map((row) => (
					<TableRow key={`${row.quality}`}>
						<TableCell>{row.quality}</TableCell>
						<TableCell>{row.examples}</TableCell>
						<TableCell>{row.cost}</TableCell>
						<TableCell>{row.source}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
