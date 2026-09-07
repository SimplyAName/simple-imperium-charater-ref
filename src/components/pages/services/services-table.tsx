import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { NewServiceJson } from "@/types/json/JsonDataTypes";

type TravelTableProps = {
	serviceData: NewServiceJson[];
	captionText?: string;
};

export function ServicesTable({
	serviceData,
	captionText,
	...forwardProps
}: TravelTableProps & React.ComponentProps<"table">) {
	const columns = simpleDataColumnsFactory<NewServiceJson>(extractColumnKeys(serviceData));

	return (
		<div {...forwardProps}>
			<DataTable
				columns={columns}
				data={serviceData}
				caption={captionText}
				wrapColumns={["examples"]}
			/>
		</div>
	);
}
