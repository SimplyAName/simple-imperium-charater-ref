import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import type { NewSkillSpecialisationJson } from "@/types/json/JsonDataTypes";

type SkillSpecialisationTableProps = {
	skillSpecialisationsData: NewSkillSpecialisationJson[];
	captionText?: string;
};

//TODO
export function SkillSpecialisationsTable(
	skillSpecialisationTableProps: SkillSpecialisationTableProps & React.ComponentProps<"table">,
) {
	const { skillSpecialisationsData, captionText, ...forwardProps } = skillSpecialisationTableProps;

	// TODO: Possibly remove total cost from json and just calc it for cleaner base data
	return (
		<Table {...forwardProps}>
			{captionText ? <TableCaption>{captionText}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead>Advances</TableHead>
					<TableHead>Skill Total Increase</TableHead>
					<TableHead>XP Cost</TableHead>
					<TableHead>Cumulative XP Cost</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{skillSpecialisationsData.map((row) => (
					<TableRow key={`${row.advances}`}>
						<TableCell>{row.advances}</TableCell>
						<TableCell>{row.totalIncrease}</TableCell>
						<TableCell>{row.xpCost}</TableCell>
						<TableCell>{row.totalXpCost}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
