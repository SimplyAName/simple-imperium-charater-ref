import { createFileRoute } from "@tanstack/react-router";

import { MedicalServicesTable } from "@/components/pages/services/MedicalServicesTable";
import { ServicesTable } from "@/components/pages/services/ServicesTable";
import { ServiceDataService } from "@/services/serviceService";

export const Route = createFileRoute("/services")({
	component: ServicesComponent,
	loader: () => ServiceDataService.getAllServiceData(),
});

function ServicesComponent() {
	//TODO: Implement search over the data

	const serviceData = Route.useLoaderData();

	return (
		<div>
			<h1>Services</h1>
			<div className="flex flex-col gap-4">
				<section>
					<h2>Accommodations</h2>
					<ServicesTable serviceData={serviceData.accommodationData}></ServicesTable>
				</section>

				<section>
					<h2>Provisions</h2>
					<ServicesTable serviceData={serviceData.provisionData}></ServicesTable>
				</section>

				<section>
					<h2>Medical Services</h2>
					<MedicalServicesTable serviceData={serviceData.medicalData}></MedicalServicesTable>
				</section>

				<h2>
					🚀 <u>Travel</u> ✈️
				</h2>
				<section>
					<h3>
						<u>Hive/City Travel</u>
					</h3>
					<ServicesTable
						serviceData={serviceData.travel.city}
						captionText="Travel within general cities and hive cities. Less populated areas might not have all these options"
					></ServicesTable>
				</section>

				<section>
					<h3>
						<u>Planetary Travel</u>
					</h3>
					<ServicesTable
						serviceData={serviceData.travel.planet}
						captionText="Services to travel around on your current planet. Some services might not be available depending on the state of the planet. E.g: Feudal world might not have access to aircraft due to their limited technology"
					></ServicesTable>
				</section>

				<section>
					<h3>
						<u>Current System Travel</u>
					</h3>
					<ServicesTable
						serviceData={serviceData.travel.system}
						captionText="Services for travelling between planets or other object in the current system"
					></ServicesTable>
				</section>

				<section>
					<h3>
						<u>Interstellar Travel</u>
					</h3>
					<ServicesTable
						serviceData={serviceData.travel.interstellar}
						captionText="For travelling to different star systems or sectors through the imperium on a warp capable vessel."
					></ServicesTable>
				</section>
			</div>
		</div>
	);
}
