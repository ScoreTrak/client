import {useAddUser, useDeleteUser, useUpdateUser, useUsers} from "../../hooks/useUsers";
import MaterialTable, {Column} from "@material-table/core";
import {IUser, UserRole} from "../../types/material_table";
import { Fragment } from "react";
import {IUserToUser, userToIUser} from "../../lib/material_table/user";
import {DeleteRequest, StoreRequest, UpdateRequest} from "@scoretrak/scoretrakapis/scoretrak/user/v1/user_pb";
import {UUID} from "@scoretrak/scoretrakapis/scoretrak/proto/v1/uuid_pb";


export default function UserMaterialTable() {
    const { isLoading, data } = useUsers()
    const addUser = useAddUser()
    const updateUser = useUpdateUser()
    const deleteUser = useDeleteUser()
    const columns: Array<Column<IUser>> = [
        { title: 'ID (optional)', field: 'id', editable: 'onAdd' as const},
        { title: 'Username', field: 'username' },
        { title: 'Password', field: 'password', render: (rowData: any) => <Fragment/> },
        { title: 'Password Hash', field: 'passwordHash', editable: 'never' as const},
        { title: 'Team ID', field: 'teamId' },
        { title: 'Role', field: 'role', lookup: { [UserRole.Black]: UserRole.Black, [UserRole.Blue]: UserRole.Blue, [UserRole.Red]: UserRole.Red }},
    ]

    if (isLoading) return <p>Loading!</p>
    if (!data) return <p>Sad Face</p>

    return (
        <>
            <MaterialTable
                title={"Users"}
                columns={columns}
                data={data.map(userToIUser)}
                options={{pageSizeOptions: [5, 10, 20, 50, 100, 500, 1000], pageSize: 20, emptyRowsWhenPaging: false}}
                editable={{
                    onRowAdd: (newData: IUser) => {
                        return new Promise<void>((resolve, reject) => {
                            setTimeout(() => {
                                const storeRequest = new StoreRequest()
                                const u = IUserToUser(newData)
                                storeRequest.addUsers(u, 0)
                                try {
                                    addUser.mutate(storeRequest)
                                    resolve()
                                } catch (e) {
                                    console.error(e)
                                    reject()
                                }
                            }, 600)
                        })
                    },
                    onRowUpdate: (newData: IUser, oldData: any) => {
                        return new Promise<void>((resolve, reject) => {
                            setTimeout(() => {
                                if (oldData) {
                                    const updateRequest = new UpdateRequest()
                                    const u = IUserToUser(newData)
                                    updateRequest.setUser(u)
                                    try {
                                        updateUser.mutate(updateRequest)
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
                                    deleteUser.mutate(deleteRequest)
                                    resolve()
                                } catch (e) {
                                    console.error(e)
                                    reject()
                                }
                            })
                        })
                    }
                }}
            />
        </>
    )
}