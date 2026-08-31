import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import type { NewHitLocationJson } from "@/types/json/JsonDataTypes";
import { numberRangeToString } from "@/utils/string-utils";

type HitLocationTableProps = {
	hitLocations: NewHitLocationJson[];
	caption?: string;
};

export function HitLocationsTable(
	hitLocationTableProps: HitLocationTableProps & React.ComponentProps<"table">,
) {
	const { hitLocations, caption, ...forwardProps } = hitLocationTableProps;

	return (
		<Table {...forwardProps}>
			{caption ? <TableCaption>{caption}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead className="text-left">Roll</TableHead>
					<TableHead className="text-left">Location</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{hitLocations.map((row) => (
					<TableRow key={`${row.roll}`} className="text-left">
						<TableCell>{numberRangeToString(row.roll)}</TableCell>
						<TableCell>{row.location}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
