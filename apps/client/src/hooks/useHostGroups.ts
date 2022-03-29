import {useMutation, useQuery, useQueryClient} from "react-query";
import {
    DeleteRequest,
    GetAllRequest,
    HostGroup,
    StoreRequest,
    UpdateRequest
} from "@scoretrak/scoretrakapis/scoretrak/host_group/v1/host_group_pb";
import {useScoretrakApiClients} from "../contexts/ScoretrakApiClients";
import grpcWeb from "grpc-web";


export function useHostGroups() {
    const {hostGroupServiceClient} = useScoretrakApiClients()

    const fetchHostGroups = async () => {
        const hostGroupsResponse = await hostGroupServiceClient.getAll(new GetAllRequest(), {})
        return hostGroupsResponse.getHostGroupsList()
    }

    return useQuery<HostGroup[], grpcWeb.RpcError>('hostGroups', fetchHostGroups)
}

export function useAddHostGroup() {
    const queryClient = useQueryClient()
    const {hostGroupServiceClient} = useScoretrakApiClients()

    const addHostGroup = async (addHostGroupRequest: StoreRequest) => {
        return await hostGroupServiceClient.store(addHostGroupRequest, {})
    }

    return useMutation(addHostGroup, {
        onSuccess: () => {
            return queryClient.invalidateQueries("hostGroups")
        }
    })
}

export function useUpdateHostGroup() {
    const queryClient = useQueryClient()
    const {hostGroupServiceClient} = useScoretrakApiClients()

    const updateHostGroup = async (updateHostGroupRequest: UpdateRequest) => {
        return await hostGroupServiceClient.update(updateHostGroupRequest, {})
    }

    return useMutation(updateHostGroup, {
        onSuccess: () => {
            return queryClient.invalidateQueries("hostGroups")
        }
    })
}

export function useDeleteHostGroup() {
    const queryClient = useQueryClient()
    const {hostGroupServiceClient} = useScoretrakApiClients()

    const deleteHostGroup = async (deleteHostGroupRequest: DeleteRequest) => {
        const deleteResponse = await hostGroupServiceClient.delete(deleteHostGroupRequest, {})
        return deleteHostGroupRequest.getId()
    }

    return useMutation(deleteHostGroup, {
        onSuccess: () => {
            return queryClient.invalidateQueries("hostGroups")
        }
    })
}
