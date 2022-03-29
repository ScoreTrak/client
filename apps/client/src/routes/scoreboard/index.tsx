import { Box } from "@mui/material";
import { useReport } from "../../contexts/ReportContext";
import ReportStatusTable from "../../components/scoreboard/ReportStatusTable"

export default function Scoreboard() {
    const report = useReport()

    if (report == null) return <h1>nothing to see here</h1>

    return (
        <>
            <Box>
                <ReportStatusTable />
            </Box>
        </>
    )
}