import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import type { NewCharacteristicImprovementJson } from "@/types/json/JsonDataTypes";

type CharacteristicImprovementTableProps = {
	characteristicImprovementsData: NewCharacteristicImprovementJson[];
	captionText?: string;
};

export function CharacteristicImprovementsTable(
	characteristicImprovementTableProps: CharacteristicImprovementTableProps &
		React.ComponentProps<"table">,
) {
	const { characteristicImprovementsData, captionText, ...forwardProps } =
		characteristicImprovementTableProps;

	return (
		<Table {...forwardProps}>
			{captionText ? <TableCaption>{captionText}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead>Level bands</TableHead>
					<TableHead>Cost per advance</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{characteristicImprovementsData.map((row) => (
					<TableRow key={`${row.newValue}`}>
						<TableCell>{`${row.newValue.min}-${row.newValue.max}`}</TableCell>
						<TableCell>{row.costPerAdvance}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
