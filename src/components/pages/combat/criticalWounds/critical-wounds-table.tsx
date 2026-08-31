import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import type { NewCriticalWoundJson } from "@/types/json/JsonDataTypes";
import { numberRangeToString } from "@/utils/string-utils";

type CriticalWoundTableProps = {
	criticalWounds: NewCriticalWoundJson[];
	caption?: string;
};

export function CriticalWoundsTable(
	criticalWoundProps: CriticalWoundTableProps & React.ComponentProps<"table">,
) {
	const { criticalWounds, caption, ...forwardProps } = criticalWoundProps;

	return (
		<Table {...forwardProps}>
			{caption ? <TableCaption>{caption}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead>Roll</TableHead>
					<TableHead>Description</TableHead>
					<TableHead>Effects</TableHead>
					<TableHead>Treatment</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{criticalWounds.map((row) => (
					<TableRow key={`${row.roll}`} className="text-left">
						<TableCell>{numberRangeToString(row.roll)}</TableCell>
						<TableCell>{row.description}</TableCell>
						<TableCell>{row.effects}</TableCell>
						<TableCell>{row.treatment}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
