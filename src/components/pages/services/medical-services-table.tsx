import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import type { NewMedicalServiceJson } from "@/types/json/JsonDataTypes";

type TravelTableProps = {
	serviceData: NewMedicalServiceJson[];
	captionText?: string;
};

export function MedicalServicesTable({
	serviceData,
	captionText,
	...props
}: TravelTableProps & React.ComponentProps<"table">) {
	return (
		<Table {...props}>
			{captionText ? <TableCaption>{captionText}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead>Quality</TableHead>
					<TableHead>Examples</TableHead>
					<TableHead>Medicae</TableHead>
					<TableHead>Cost</TableHead>
					<TableHead>Additional Resources</TableHead>
					<TableHead>Source</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{serviceData.map((row) => (
					<TableRow key={`${row.quality}`}>
						<TableCell>{row.quality}</TableCell>
						<TableCell>{row.examples}</TableCell>
						<TableCell>{row.medicae}</TableCell>
						<TableCell>{row.cost}</TableCell>
						<TableCell>
							{row.additionalResources
								? row.additionalResources.join(", ")
								: "No additional resources required"}
						</TableCell>
						<TableCell>{row.source}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
