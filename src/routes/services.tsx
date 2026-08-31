import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { MedicalServicesTable } from "@/components/pages/services/medical-services-table";
import { ServicesTable } from "@/components/pages/services/services-table";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ServiceDataService, type AllServiceData } from "@/services/servicesService";
import type { NewMedicalServiceJson, NewServiceJson } from "@/types/json/JsonDataTypes";
import { stringIncludes } from "@/utils/string-utils";

//TODO: Update this to use url query params to save and restore search between refreshes and if they want to share it
export const Route = createFileRoute("/services")({
	component: ServicesComponent,
	loader: () => ServiceDataService.getAllServiceData(),
});

type SearchParms = {
	quality?: string;
	examples?: string;
	cost_min?: number;
	cost_max?: number;
	medicae?: number;
	requiredItem?: string;
};

function ServicesComponent() {
	//TODO: Implement search over the data
	const serviceData: AllServiceData = Route.useLoaderData();
	const [filteredData, setFilteredData] = useState(serviceData);

	const [qualityQuery, setQualityQuery] = useState<string | undefined>(undefined);
	const [examplesQuery, setExamplesQuery] = useState<string | undefined>(undefined);

	function searchData(searchParams: SearchParms) {
		if (searchParams === undefined) {
			setFilteredData(serviceData);
			return;
		}

		const newFilteredData: AllServiceData = {
			accommodationData: serviceData.accommodationData.filter((value) =>
				filterServiceData(value, searchParams),
			),
			provisionData: serviceData.provisionData.filter((value) =>
				filterServiceData(value, searchParams),
			),
			medicalData: serviceData.medicalData.filter((value) =>
				filterMedicalServiceData(value, searchParams),
			),
			travel: {
				city: serviceData.travel.city.filter((value) => filterServiceData(value, searchParams)),
				planet: serviceData.travel.planet.filter((value) => filterServiceData(value, searchParams)),
				system: serviceData.travel.system.filter((value) => filterServiceData(value, searchParams)),
				interstellar: serviceData.travel.interstellar.filter((value) =>
					filterServiceData(value, searchParams),
				),
			},
		};

		setFilteredData(newFilteredData);
	}

	function handleSearchEvent({ quality = qualityQuery, examples = examplesQuery }: SearchParms) {
		if (quality !== qualityQuery) {
			setQualityQuery(quality);
		}

		if (examples !== examplesQuery) {
			setExamplesQuery(examples);
		}

		searchData({ quality: quality, examples: examples });
	}

	return (
		<div>
			<h1>Services</h1>
			<div className="flex flex-col gap-4">
				<div>
					<div className="text-lg">Search</div>
					{/* TODO: Use the enum to generate a select dropdown */}
					<div>
						<Field>
							<Input
								type="text"
								placeholder="Enter quality"
								value={qualityQuery}
								onChange={(event) => {
									handleSearchEvent({ quality: event.target.value });
								}}
							/>
						</Field>
						<Field>
							<Input
								type="text"
								placeholder="Enter examples"
								value={examplesQuery}
								onChange={(event) => {
									handleSearchEvent({ examples: event.target.value });
								}}
							/>
						</Field>
					</div>
				</div>

				<section>
					<h2>Accommodations</h2>
					<ServicesTable serviceData={filteredData.accommodationData}></ServicesTable>
				</section>

				<section>
					<h2>Provisions</h2>
					<ServicesTable serviceData={filteredData.provisionData}></ServicesTable>
				</section>

				<section>
					<h2>Medical Services</h2>
					<MedicalServicesTable serviceData={filteredData.medicalData}></MedicalServicesTable>
				</section>

				<h2>
					🚀 <u>Travel</u> ✈️
				</h2>
				<section>
					<h3>
						<u>Hive/City Travel</u>
					</h3>
					<ServicesTable
						serviceData={filteredData.travel.city}
						captionText="Travel within general cities and hive cities. Less populated areas might not have all these options"
					></ServicesTable>
				</section>

				<section>
					<h3>
						<u>Planetary Travel</u>
					</h3>
					<ServicesTable
						serviceData={filteredData.travel.planet}
						captionText="Services to travel around on your current planet. Some services might not be available depending on the state of the planet. E.g: Feudal world might not have access to aircraft due to their limited technology"
					></ServicesTable>
				</section>

				<section>
					<h3>
						<u>Current System Travel</u>
					</h3>
					<ServicesTable
						serviceData={filteredData.travel.system}
						captionText="Services for travelling between planets or other object in the current system"
					></ServicesTable>
				</section>

				<section>
					<h3>
						<u>Interstellar Travel</u>
					</h3>
					<ServicesTable
						serviceData={filteredData.travel.interstellar}
						captionText="For travelling to different star systems or sectors through the imperium on a warp capable vessel."
					></ServicesTable>
				</section>
			</div>
		</div>
	);
}

function filterServiceData(
	value: NewServiceJson,
	{ quality, examples, cost_min, cost_max }: SearchParms,
) {
	return (
		(quality ? stringIncludes(value.quality, quality) : true) &&
		(examples ? stringIncludes(value.examples, examples) : true) &&
		(cost_min ? value.cost >= cost_min : true) &&
		(cost_max ? value.cost <= cost_max : true)
	);
}

function filterMedicalServiceData(
	value: NewMedicalServiceJson,
	{ quality, examples, cost_min, cost_max, medicae, requiredItem }: SearchParms,
) {
	return (
		filterServiceData(value, { quality, examples, cost_min, cost_max }) &&
		value.medicae === medicae &&
		(value.additionalResources && requiredItem
			? value.additionalResources.filter((value) => value.includes(requiredItem))
			: true)
	);
}
