import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import DangerousRoundedIcon from '@mui/icons-material/DangerousRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { useReport } from '../../contexts/ReportContext';
import { Service } from '../../types/report'
import {Icon, SvgIcon} from "@mui/material";

export default function ReportStatusTable() {
    const report = useReport()!

    const [rowPage, setRowPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(25);

    const handleRowChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        setRowPage(page);
    };

    const handleChangeRowsPerPage = (event: { target: { value: React.ReactText; }; }) => {
        setRowsPerPage(Number(event.target.value));
        setRowPage(0);
    };

    const [columnPage, setColumnPage] = useState(0);
    const [columnsPerPage, setColumnsPerPage] = useState(25);
    const handleColumnChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
        setColumnPage(page);
    };
    const handleChangeColumnsPerPage = (event: { target: { value: React.ReactText; }; }) => {
        setColumnsPerPage(Number(event.target.value));
        setColumnPage(0);
    };

    const teamNamesSet = new Set<string>();
    const data: Record<string, Record<string, Service & {Address: string}>> = {}
    const dataKeys = new Set<string>();
    if ("Teams" in report){
        for (const team in report.Teams) {
            if (report.Teams.hasOwnProperty(team)) {
                data[report.Teams[team].Name] = {}
                for (const host in report.Teams[team].Hosts){
                    if (report.Teams[team].Hosts.hasOwnProperty(host)) {
                        if (Object.keys(report.Teams[team].Hosts[host].Services).length !== 0){
                            for (const service in report.Teams[team].Hosts[host].Services) {
                                if (report.Teams[team].Hosts[host].Services.hasOwnProperty(service)) {
                                    const hst = report.Teams[team].Hosts[host]
                                    const sr = hst.Services[service]
                                    let keyName = ""
                                    if (sr.DisplayName){
                                        keyName = sr.DisplayName
                                    } else {
                                        if (hst.HostGroup != null){
                                            keyName = hst.HostGroup.Name + "-" + sr.Name
                                        } else{
                                            keyName = sr.Name
                                        }
                                    }

                                    data[report.Teams[team].Name][keyName] = {...sr, Address: report.Teams[team].Hosts[host].Address,
                                        Pause: report.Teams[team].Pause ||
                                            (hst.HostGroup != null ? hst.HostGroup.Pause : false)
                                            || hst.Pause
                                            || sr.Pause
                                    }



                                    dataKeys.add(keyName)
                                    teamNamesSet.add(report.Teams[team].Name)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    const dataKeysArray = Array.from(dataKeys)
    const teamNames = Array.from(teamNamesSet)
    const collator = new Intl.Collator([], {numeric: true});
    dataKeysArray.sort()
    teamNames.sort((a, b) => collator.compare(a, b));

    return (
        <>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Team Name
                            </TableCell>

                            {dataKeysArray.slice(columnPage * columnsPerPage, columnPage * columnsPerPage + columnsPerPage).map((column) => (
                                <TableCell width={`${100/(dataKeysArray.slice(columnPage * columnsPerPage, columnPage * columnsPerPage + columnsPerPage).length)}%`}
                                           align="center"
                                    key={column}
                                >
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {teamNames.slice(rowPage * rowsPerPage, rowPage * rowsPerPage + rowsPerPage).map((name) => {
                            return (
                                <TableRow hover tabIndex={-1} key={name}>
                                    <TableCell style={{
                                        'whiteSpace': 'nowrap',
                                        'overflow': 'hidden',
                                        'textOverflow': 'ellipsis'}}>
                                        {name}
                                    </TableCell>
                                    {dataKeysArray.slice(columnPage * columnsPerPage, columnPage * columnsPerPage + columnsPerPage).map((column) => (
                                        <TableCell key={name + column}
                                                   width={`${100/(dataKeysArray.slice(columnPage * columnsPerPage, columnPage * columnsPerPage + columnsPerPage).length)}%`}
                                                //    style={(() => {
                                                //     if (data[name][column]) {
                                                //         let style = {}
                                                //         if (data[name][column].Pause){
                                                //             style = {backgroundColor: "#000000"}
                                                //         } else if (data[name][column].Check != null && data[name][column].Check?.Passed){
                                                //             style =  {backgroundColor: "green"}
                                                //         } else{
                                                //             style = {backgroundColor: "red", color: "white"}
                                                //         }
                                                //         // const teamId = token.getCurrentTeamID()
                                                //
                                                //         // if (token.isAValidToken() && teamId != null  && teamId in report.Teams && report.Teams[teamId].Name === name && highlightParentTeam) {
                                                //         //     style = {
                                                //         //         ...style,
                                                //         //         borderTop: '2px solid rgba(0, 0, 0, 1)',
                                                //         //         borderBottom: '2px solid rgba(0, 0, 0, 1)',
                                                //         //         borderLeft: '1px solid rgba(0, 0, 0, 0.5)',
                                                //         //         borderRight: '1px solid rgba(0, 0, 0, 0.5)',
                                                //
                                                //         //     }
                                                //         // } else{
                                                //         //     style = {...style, border: '1px solid rgba(0, 0, 0, 0.5)'}
                                                //         // }
                                                //
                                                //         return style
                                                //     }
                                                // })()}
                                                   align="center"
                                                   padding="none"
                                        >
                                            <SvgIcon>
                                                {data[name][column].Check != null && data[name][column].Check?.Passed &&
                                                    <CheckCircleIcon color={'success'} />
                                                }
                                            </SvgIcon>
                                            {/* {!hideAddresses && data[name][column] && (() => {
                                                let msg = ""
                                                if (data[name][column].Address) {
                                                    msg += data[name][column].Address
                                                    if (column in data[name] && "Properties" in data[name][column]){
                                                        Object.keys(data[name][column].Properties).forEach(key => {
                                                            if (key === "Port"){
                                                                msg += ":" + data[name][column].Properties[key].Value
                                                            }
                                                        })
                                                    }
                                                }
                                                return msg
                                            })()} */}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}