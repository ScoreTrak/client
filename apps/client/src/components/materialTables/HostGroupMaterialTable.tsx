import {useHostGroups, useAddHostGroup, useDeleteHostGroup, useUpdateHostGroup} from "../../hooks/useHostGroups";
import MaterialTable, {Column} from "@material-table/core";
import {CircularProgress} from "@mui/material";
import {
    DeleteRequest,
    HostGroup,
    StoreRequest,
    UpdateRequest
} from "@scoretrak/scoretrakapis/scoretrak/host_group/v1/host_group_pb";
import {useEffect, useState} from "react";
import {hostGroupToIHostGroup, IHostGroupToHostGroup} from "../../lib/material_table/host_group";
import {IHostGroup} from "../../types/material_table";
import {UUID} from "@scoretrak/scoretrakapis/scoretrak/proto/v1/uuid_pb";

export default function HostGroupMaterialTable() {
    const { isLoading, data } = useHostGroups()
    const addHostGroup = useAddHostGroup()
    const updateHostGroup = useUpdateHostGroup()
    const deleteHostGroup = useDeleteHostGroup()

    const columns: Array<Column<IHostGroup>> = [
        { title: 'ID (optional)', field: 'id', editable: 'onAdd'},
        { title: 'Host Group Name', field: 'name' },
        { title: 'Hide from Scoreboard', field: 'hide', type: 'boolean', initialEditValue: false},
        { title: 'Pause Scoring', field: 'pause', type: 'boolean', initialEditValue: false},
    ]


    if (isLoading) return <CircularProgress />
    if (!data) return <p>Sad Face</p>

    return (
        <>
            <MaterialTable
                title={'Host Groups'}
                columns={columns}
                data={data.map(hostGroupToIHostGroup)}
                editable={{
                    onRowAdd: (newData: IHostGroup) => {
                        return new Promise<void>((resolve, reject) => {
                            setTimeout(() => {
                                const storeRequest = new StoreRequest()
                                const u = IHostGroupToHostGroup(newData)
                                storeRequest.addHostGroups(u, 0)
                                try {
                                    addHostGroup.mutate(storeRequest)
                                    resolve()
                                } catch (e) {
                                    console.error(e)
                                    reject()
                                }
                            }, 600)
                        });
                    },
                    onRowUpdate: (newData: IHostGroup, oldData: any) => {
                        return new Promise<void>((resolve, reject) => {
                            setTimeout(() => {
                                const updateRequest = new UpdateRequest()
                                const u = IHostGroupToHostGroup(newData)
                                updateRequest.setHostGroup(u)
                                try {
                                    updateHostGroup.mutate(updateRequest)
                                    resolve()
                                } catch (e) {
                                    console.error(e)
                                    reject()
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
                                    deleteHostGroup.mutate(deleteRequest)
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