import {
    DeleteRequest,
    HostGroup,
    StoreRequest,
    UpdateRequest
} from "@scoretrak/scoretrakapis/scoretrak/host_group/v1/host_group_pb";
import {useScoretrakApiClients} from "../contexts/ScoretrakApiClients";

enum HostGroupsReducerActions {
    STORE = 'STORE',
    UPDATE = 'UPDATE',
    DELETE= 'DELETE'
}

interface HostGroupsReducerActionPayload {
    type: HostGroupsReducerActions,
    payload: StoreRequest | UpdateRequest | DeleteRequest
}

export default function hostGroupsReducer(state: HostGroup[], action: any ) {
    return state.map(hostGroup => hostGroup.toObject())
}