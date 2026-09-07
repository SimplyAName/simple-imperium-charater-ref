import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { NewSkillJson } from "@/types/json/JsonDataTypes";

type SkillTableProps = {
	skillsData: NewSkillJson[];
	caption?: string;
};

export function SkillsTable(skillTableProps: SkillTableProps & React.ComponentProps<"table">) {
	const { skillsData, caption, ...forwardProps } = skillTableProps;
	const columns = simpleDataColumnsFactory<NewSkillJson>(extractColumnKeys(skillsData));

	return (
		<div {...forwardProps}>
			<DataTable
				columns={columns}
				data={skillsData}
				caption={caption}
				wrapColumns={["specialisations"]}
			/>
		</div>
	);
}
