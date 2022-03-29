// @ts-ignore
import MaterialTable, {Column} from "@material-table/core";
import {DeleteRequest, StoreRequest, Team, UpdateRequest} from "@scoretrak/scoretrakapis/scoretrak/team/v1/team_pb";
import {BoolValue, UInt64Value} from "google-protobuf/google/protobuf/wrappers_pb";
import {UUID} from "@scoretrak/scoretrakapis/scoretrak/proto/v1/uuid_pb";
import useTeams, {useAddTeam, useDeleteTeam, useUpdateTeam} from "../../../hooks/useTeams";
import TeamMaterialTable from "../../../components/materialTables/TeamMaterialTable";


export default function Teams() {
    return (
        <>
            <h1>Teams</h1>
            <TeamMaterialTable />
        </>
    )
}