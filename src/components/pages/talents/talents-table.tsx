import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import type { NewTalentJson } from "@/types/json/JsonDataTypes";

type TravelTableProps = {
	talentData: NewTalentJson[];
	captionText?: string;
};

export function TalentsTable(travelTableProps: TravelTableProps & React.ComponentProps<"table">) {
	const { talentData, captionText, ...forwardProps } = travelTableProps;

	return (
		<Table {...forwardProps}>
			{captionText ? <TableCaption>{captionText}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Description</TableHead>
					<TableHead>Requirements</TableHead>
					<TableHead>Source</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{talentData.map((row) => (
					<TableRow key={`${row.name}`} className="text-left">
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.description}</TableCell>
						<TableCell>
							{row.requirements ? row.requirements.join(", ") : "No requirements"}
						</TableCell>
						<TableCell>{row.source}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
