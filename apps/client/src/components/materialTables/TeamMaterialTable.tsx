import MaterialTable, {Column} from "@material-table/core";
import {ITeam} from "../../types/material_table";
import {useAddTeam, useDeleteTeam, useTeams, useUpdateTeam} from "../../hooks/useTeams";
import {ITeamToTeam, teamToITeam} from "../../lib/material_table/team";
import {DeleteRequest, StoreRequest, UpdateRequest} from "@scoretrak/scoretrakapis/scoretrak/team/v1/team_pb";
import {UUID} from "@scoretrak/scoretrakapis/scoretrak/proto/v1/uuid_pb";


export default function TeamMaterialTable() {
    const { isLoading, data } = useTeams()
    const addTeam = useAddTeam()
    const updateTeam = useUpdateTeam()
    const deleteTeam = useDeleteTeam()
    const columns: Array<Column<ITeam>> =
        [
            { title: 'ID (optional)', field: 'id', editable: 'onAdd'},
            { title: 'Team Name', field: 'name' },
            { title: 'Index', field: 'index', type: 'numeric' },
            { title: 'Hide from Scoreboard', field: 'hide', type: 'boolean', initialEditValue: false},
            { title: 'Pause Scoring', field: 'pause', type: 'boolean', initialEditValue: false},
        ]

    if (isLoading) return <p>Loading!</p>
    if (!data) return <p>Sad Face</p>

    return (
        <>
            <MaterialTable
                title={"Teams"}
                columns={columns}
                data={data.map(teamToITeam)}
                options={{pageSizeOptions: [5, 10, 20, 50, 100, 500, 1000], pageSize: 20, emptyRowsWhenPaging: false}}
                editable={{
                    onRowAdd: (newData: ITeam) => {
                        return new Promise<void>((resolve, reject) => {
                            setTimeout(() => {
                                const storeRequest = new StoreRequest()
                                const u = ITeamToTeam(newData)
                                storeRequest.addTeams(u, 0)
                                try {
                                    addTeam.mutate(storeRequest)
                                    resolve()
                                } catch (e) {
                                    console.error(e)
                                    reject()
                                }
                            }, 600);
                        });
                    },
                    onRowUpdate: (newData: ITeam, oldData: any) => {
                        return new Promise<void>((resolve, reject) => {
                            setTimeout(() => {
                                if (oldData) {
                                    const updateRequest = new UpdateRequest()
                                    const u = ITeamToTeam(newData)
                                    updateRequest.setTeam(u)
                                    try {
                                        updateTeam.mutate(updateRequest)
                                        resolve()
                                    } catch (e) {
                                        console.error(e)
                                        reject()
                                    }
                                }
                            }, 600);
                        });
                    },
                    onRowDelete: (oldData) => {
                        return new Promise<void>((resolve, reject) => {
                            setTimeout(() => {
                                const deleteRequest = new DeleteRequest()
                                deleteRequest.setId((new UUID().setValue(oldData.id as string)))
                                try {
                                    deleteTeam.mutate(deleteRequest)
                                    resolve()
                                } catch (e) {
                                    console.error(e)
                                    reject()
                                }
                            }, 600);
                        });
                    },
                }}
            />
        </>
    )
}