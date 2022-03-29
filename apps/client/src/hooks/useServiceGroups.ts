import {
    DeleteRequest,
    GetAllRequest,
    ServiceGroup,
    StoreRequest,
    UpdateRequest
} from "@scoretrak/scoretrakapis/scoretrak/service_group/v1/service_group_pb";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {useScoretrakApiClients} from "../contexts/ScoretrakApiClients";
import grpcWeb from "grpc-web";


export function useServiceGroups() {
    const {serviceGroupServiceClient} = useScoretrakApiClients()

    async function fetchServiceGroups() {
        const serviceGroupsResponse = await serviceGroupServiceClient.getAll(new GetAllRequest(), {})
        return serviceGroupsResponse.getServiceGroupsList()
    }

    return useQuery<ServiceGroup[], grpcWeb.RpcError>('serviceGroups', fetchServiceGroups)
}

export function useAddServiceGroup() {
    const queryClient = useQueryClient()
    const {serviceGroupServiceClient} = useScoretrakApiClients()

    const addServiceGroup = async (addServiceGroupRequest: StoreRequest) => {
        return await serviceGroupServiceClient.store(addServiceGroupRequest, {})
    }

    return useMutation(addServiceGroup, {
        onSuccess: () => {
            return queryClient.invalidateQueries("serviceGroups")
        }
    })
}

export function useUpdateServiceGroup() {
    const queryClient = useQueryClient()
    const {serviceGroupServiceClient} = useScoretrakApiClients()

    const updateServiceGroup = async (updateServiceGroupRequest: UpdateRequest) => {
        return await serviceGroupServiceClient.update(updateServiceGroupRequest, {})
    }

    return useMutation(updateServiceGroup, {
        onSuccess: () => {
            return queryClient.invalidateQueries("serviceGroups")
        }
    })
}

export function useDeleteServiceGroup() {
    const queryClient = useQueryClient()
    const {serviceGroupServiceClient} = useScoretrakApiClients()

    const deleteServiceGroup = async (deleteServiceGroupRequest: DeleteRequest) => {
        const deleteResponse = await serviceGroupServiceClient.delete(deleteServiceGroupRequest, {})
        return deleteServiceGroupRequest.getId()
    }

    return useMutation(deleteServiceGroup, {
        onSuccess: () => {
            return queryClient.invalidateQueries("serviceGroups")
        }
    })
}
