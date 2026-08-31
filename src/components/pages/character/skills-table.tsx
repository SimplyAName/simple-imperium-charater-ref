import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import type { NewSkillJson } from "@/types/json/JsonDataTypes";

type SkillTableProps = {
	skillsData: NewSkillJson[];
	captionText?: string;
};

export function SkillsTable(skillTableProps: SkillTableProps & React.ComponentProps<"table">) {
	const { skillsData, captionText, ...forwardProps } = skillTableProps;

	return (
		<Table {...forwardProps}>
			{captionText ? <TableCaption>{captionText}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead>Skill</TableHead>
					<TableHead>Characteristic</TableHead>
					<TableHead>Specialisations</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{skillsData.map((row) => (
					<TableRow key={`${row.skill}`}>
						<TableCell>{row.skill}</TableCell>
						<TableCell>{row.characteristic}</TableCell>
						<TableCell>{row.specialisations.join(", ")}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
