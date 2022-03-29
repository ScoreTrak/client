import { GetRequest, GetResponse } from "@scoretrak/scoretrakapis/scoretrak/report/v1/report_pb";
import {createContext, useContext, useEffect, useState} from "react";
import { Report } from "../types/report"
import {useScoretrakApiClients} from "./ScoretrakApiClients";

export const ReportContext = createContext<Report | null>(null)

export function useReport() {
    return useContext(ReportContext)
}

// @ts-ignore
export function ReportProvider({ children }) {
    const {reportServiceClient} = useScoretrakApiClients()
    const [report, setReport] = useState<Report | null>(null)

    useEffect(() => {
        const streamRequest = new GetRequest();
        const stream = reportServiceClient.get(streamRequest, {})
        stream.on('error', (err) => {
            console.error(err);
        })

        stream.on("data", (response) => {
            const report = response.getReport()?.toObject()
            if (report?.cache != null) {
                const parsedReport = JSON.parse(report.cache) as Report
                setReport(parsedReport)
            }
        })

        return () => stream.cancel()
    }, [])

    return (
        <>
            <ReportContext.Provider value={report}>
                {children}
            </ReportContext.Provider>

        </>
    )
}
