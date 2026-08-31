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
	caption?: string;
};

export function SkillsTable(skillTableProps: SkillTableProps & React.ComponentProps<"table">) {
	const { skillsData, caption, ...forwardProps } = skillTableProps;

	return (
		<Table {...forwardProps}>
			{caption ? <TableCaption>{caption}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead className="text-center">Skill</TableHead>
					<TableHead className="text-center">Characteristic</TableHead>
					<TableHead>Specialisations</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{skillsData.map((row) => (
					<TableRow key={`${row.skill}`}>
						<TableCell>{row.skill}</TableCell>
						<TableCell>{row.characteristic}</TableCell>
						<TableCell className="text-left">
							{row.specialisations.map((spec) => spec.name).join(", ")}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
