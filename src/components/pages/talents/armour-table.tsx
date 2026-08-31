import {
	Table,
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "@/components/ui/table";
import type { NewArmourJson } from "@/types/json/JsonDataTypes";

type ArmourTableProps = {
	armour: NewArmourJson[];
	captionText?: string;
};

export function ArmourTable(armourProps: ArmourTableProps & React.ComponentProps<"table">) {
	const { armour: armourData, captionText, ...forwardProps } = armourProps;

	return (
		<Table {...forwardProps}>
			{captionText ? <TableCaption>{captionText}</TableCaption> : null}
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Armour</TableHead>
					<TableHead>Locations</TableHead>
					<TableHead>Encumbrance</TableHead>
					<TableHead>Traits</TableHead>
					<TableHead>Cost</TableHead>
					<TableHead>Availability</TableHead>
					<TableHead>Source</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{armourData.map((row) => (
					<TableRow key={`${row.name}`} className="text-left">
						<TableCell>{row.name}</TableCell>
						<TableCell>{row.armour}</TableCell>
						<TableCell>{row.locations.join(", ")}</TableCell>
						<TableCell>{row.encumbrance}</TableCell>
						<TableCell>
							{/* TODO: Add a hover to view full trait info */}

							{row.traits
								?.map((trait) => {
									if (trait.value) {
										return `${trait.name} (${trait.value})`;
									}
									return trait.name;
								})
								.join(", ")}
						</TableCell>
						<TableCell>{row.cost}</TableCell>
						<TableCell>{row.availability}</TableCell>
						<TableCell>{row.source}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
