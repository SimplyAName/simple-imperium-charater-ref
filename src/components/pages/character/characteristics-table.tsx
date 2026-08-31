import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import type { CharacteristicJson } from "@/types/json/JsonDataTypes";

type CharacteristicTableProps = {
	characteristicsData: CharacteristicJson[];
	captionText?: string;
};

export function CharacteristicsTable(
	characteristicTableProps: CharacteristicTableProps & React.ComponentProps<"table">,
) {
	const { characteristicsData, captionText, ...forwardProps } = characteristicTableProps;

	return (
		<Table {...forwardProps}>
			{captionText ? <TableCaption>{captionText}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead className="text-center">Characteristic</TableHead>
					<TableHead className="text-center">Shortened</TableHead>
					<TableHead>Description</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{characteristicsData.map((row) => (
					<TableRow key={`${row.name}`}>
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.short}</TableCell>
						<TableCell className="text-left">{row.description}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
