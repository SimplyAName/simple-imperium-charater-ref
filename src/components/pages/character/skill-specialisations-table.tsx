import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
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
	const columns = simpleDataColumnsFactory<NewSkillSpecialisationJson>(
		extractColumnKeys(skillSpecialisationsData),
	);

	return (
		<div {...forwardProps}>
			<DataTable columns={columns} data={skillSpecialisationsData} caption={captionText} />
		</div>
	);
}
