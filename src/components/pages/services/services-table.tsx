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

export function ServicesTable({ serviceData, captionText }: TravelTableProps) {
	return (
		<Table>
			{captionText ? <TableCaption>{captionText}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">Quality</TableHead>
					<TableHead>Examples</TableHead>
					<TableHead>Cost</TableHead>
					<TableHead className="text-right">Source</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{serviceData.map((row) => (
					<TableRow key={`${row.quality}`}>
						<TableCell className="font-medium">{row.quality}</TableCell>
						<TableCell>{row.examples}</TableCell>
						<TableCell>{row.cost}</TableCell>
						<TableCell className="text-right">{row.source}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
