import {
	extractColumnKeys,
	simpleDataColumnsFactory,
} from "@/components/ui/data-table/customColumnHelper";
import { DataTable } from "@/components/ui/data-table/data-table";
import type { NewMedicalServiceJson } from "@/types/json/JsonDataTypes";

type TravelTableProps = {
	serviceData: NewMedicalServiceJson[];
	captionText?: string;
};

export function MedicalServicesTable({
	serviceData,
	captionText,
	...props
}: TravelTableProps & React.ComponentProps<"table">) {
	const columns = simpleDataColumnsFactory<NewMedicalServiceJson>(extractColumnKeys(serviceData));

	return (
		<div {...props}>
			<DataTable
				columns={columns}
				data={serviceData}
				caption={captionText}
				wrapColumns={["examples", "additionalResources"]}
			/>
		</div>
	);
}
