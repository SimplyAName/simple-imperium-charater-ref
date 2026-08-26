import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import type { NewServiceJson } from '@/types/json/JsonDataTypes'
import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ServiceDataService } from '@/services/serviceService'

type Props = { serviceData: NewServiceJson[] }

export const Route = createFileRoute('/services')({
    component: ServicesComponent,
    loader: () => { return { medData: ServiceDataService.getMedicalServices(), accomData: ServiceDataService.getAccommodationsServices(), provData: ServiceDataService.getProvisionsServices() } }
})

function ServicesComponent() {
    //TODO: Implement search over the data

    const { medData, accomData, provData } = Route.useLoaderData()

    return (
        <div>
            <h1>Services</h1>
            <section>
                <h2>Hive/City Travel</h2>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            provData.map(element => (
                                <TableRow key={`prov-${element.quality}`}>
                                    <TableCell className="font-medium">
                                        {element.quality}
                                    </TableCell>
                                    <TableCell>{element.examples}</TableCell>
                                    <TableCell>{element.quality}</TableCell>
                                    <TableCell className="text-right">{element.source}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </section>
        </div>
    )
}