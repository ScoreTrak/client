import MaterialTable, {Column} from "@material-table/core";
import {CircularProgress} from "@mui/material";
import {useAddHost, useDeleteHost, useHosts, useUpdateHost} from "../../hooks/useHosts";
import {IHost} from "../../types/material_table";
import {hostToIHost, IHostToHost} from "../../lib/material_table/host";
import {DeleteRequest, StoreRequest, UpdateRequest} from "@scoretrak/scoretrakapis/scoretrak/host/v1/host_pb";
import {UUID} from "@scoretrak/scoretrakapis/scoretrak/proto/v1/uuid_pb";
import {useHostGroups} from "../../hooks/useHostGroups";
import {useTeams} from "../../hooks/useTeams";
import {useEffect, useState} from "react";

export default function HostMaterialTable() {
    const {data: hostGroupData} = useHostGroups()
    const {data: teamData} = useTeams()
    const { isLoading, data } = useHosts()
    const addHost = useAddHost()
    const updateHost = useUpdateHost()
    const deleteHost = useDeleteHost()
    const [columns, setColumns] = useState<Column<IHost>[]>([
        { title: 'ID (optional)', field: 'id', editable: 'onAdd'},
        { title: 'Address', field: 'address' },
        { title: 'Host Group ID', field: 'hostGroupId' },
        { title: 'Team ID', field: 'teamId' },
        { title: 'Hide from Scoreboard', field: 'hide', type: 'boolean', initialEditValue: false},
        { title: 'Pause Scoring', field: 'pause', type: 'boolean', initialEditValue: false},
        { title: 'Edit Host(Allow users to change Addresses)', field: 'editHost', type: 'boolean' },
        { title: "Address Range(comma separated list of allowed CIDR ranges and hostnames)", field: 'addressListRange'}
    ])

    useEffect(() => {
        if (hostGroupData) {
            const lookup: Record<string, string> = {}

            for (let i = 0; i < hostGroupData.length; i++) {
                const hostGroup = hostGroupData[i]
                lookup[hostGroup.getId()?.getValue() as string] = `${hostGroup.getName()} (ID: ${hostGroup.getId()?.getValue() as string}`
            }

            setColumns(prevState => {
                for (let i = 0; i < prevState.length; i++) {
                    const column = prevState[i]
                    if (column.title == "Host Group ID") {
                        column.lookup = lookup
                    }
                }

                return prevState
            })
        }

    }, [hostGroupData])


    useEffect(() => {
        if (teamData) {
            const lookup: Record<string, string> = {}

            for (let i = 0; i < teamData.length; i++) {
                const team = teamData[i]
                lookup[team.getId()?.getValue() as string] = `${team.getName()} (ID: ${team.getId()?.getValue() as string}`
            }

            setColumns(prevState => {
                for (let i = 0; i < prevState.length; i++) {
                    const column = prevState[i]
                    if (column.title == "Team ID") {
                        column.lookup = lookup
                    }
                }

                return prevState
            })
        }

    }, [teamData])




    if (isLoading) return <CircularProgress />
    if (!data) return <p>Sad Face</p>

    return (
        <>
            <MaterialTable
                title={"Hosts"}
                columns={columns}
                data={data.map(hostToIHost)}
                options={{pageSizeOptions: [5, 10, 20, 50, 100, 500, 1000], pageSize: 20, emptyRowsWhenPaging: false}}
                editable={{
                    onRowAdd: (newData: IHost) => {
                        return new Promise<void>((resolve, reject) => {
                            setTimeout(() => {

                                const storeRequest = new StoreRequest()
                                const u = IHostToHost(newData)
                                storeRequest.addHosts(u, 0)
                                try {
                                    addHost.mutate(storeRequest)
                                    resolve()
                                } catch (e) {
                                    console.error(e)
                                    reject()
                                }
                            }, 600)
                        });
                    },
                    onRowUpdate: (newData: IHost, oldData: any) => {
                        return new Promise<void>((resolve, reject) => {
                            setTimeout(() => {

                                if (oldData) {
                                    const updateRequest = new UpdateRequest()
                                    const u = IHostToHost(newData)
                                    updateRequest.setHost(u)
                                    try {
                                        updateHost.mutate(updateRequest)
                                        resolve()
                                    } catch (e) {
                                        console.error(e)
                                        reject()
                                    }
                                }
                            }, 600)
                        })
                    },
                    onRowDelete: (oldData) => {
                        return new Promise<void>((resolve, reject) => {
                            setTimeout(() => {

                                const deleteRequest = new DeleteRequest()
                                deleteRequest.setId((new UUID().setValue(oldData.id as string)))
                                try {
                                    deleteHost.mutate(deleteRequest)
                                    resolve()
                                } catch (e) {
                                    console.error(e)
                                    reject()
                                }
                            }, 600)
                        })
                    }
                }}
            />
        </>
    )
}