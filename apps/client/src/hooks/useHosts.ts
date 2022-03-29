import {
    DeleteRequest,
    GetAllRequest, GetByIDRequest,
    Host,
    StoreRequest,
    UpdateRequest
} from "@scoretrak/scoretrakapis/scoretrak/host/v1/host_pb";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {useScoretrakApiClients} from "../contexts/ScoretrakApiClients";
import grpcWeb from "grpc-web";
import {UUID} from "@scoretrak/scoretrakapis/scoretrak/proto/v1/uuid_pb";


export function useHosts() {
    const {hostServiceClient} = useScoretrakApiClients()

    const fetchHosts = async () => {
        const hostsResponse = await hostServiceClient.getAll(new GetAllRequest(), {})
        return hostsResponse.getHostsList()
    }

    return useQuery<Host[], grpcWeb.RpcError>('hosts', fetchHosts)
}

export function useHost(hostId: string) {
    const {hostServiceClient} = useScoretrakApiClients()

    const fetchHost = async (id: string) => {
        const hostRequest = new GetByIDRequest()
        hostRequest.setId(new UUID().setValue(id))
        const hostResponse = await hostServiceClient.getByID(hostRequest, {})
        return hostResponse.getHost()!
    }

    return useQuery<Host, grpcWeb.RpcError>(['hosts', hostId], () => fetchHost(hostId))
}

export function useAddHost() {
    const queryClient = useQueryClient()
    const {hostServiceClient} = useScoretrakApiClients()

    const addHost = async (addHostRequest: StoreRequest) => {
        return await hostServiceClient.store(addHostRequest, {})
    }

    return useMutation(addHost, {
        onSuccess: () => {
            return queryClient.invalidateQueries("hosts")
        }
    })
}

export function useUpdateHost() {
    const queryClient = useQueryClient()
    const {hostServiceClient} = useScoretrakApiClients()

    const updateHost = async (updateHostRequest: UpdateRequest) => {
        return await hostServiceClient.update(updateHostRequest, {})
    }

    return useMutation(updateHost, {
        onSuccess: () => {
            return queryClient.invalidateQueries("hosts")
        }
    })
}

export function useDeleteHost() {
    const queryClient = useQueryClient()
    const {hostServiceClient} = useScoretrakApiClients()

    const deleteHost = async (deleteHostRequest: DeleteRequest) => {
        return await hostServiceClient.delete(deleteHostRequest, {})
    }

    return useMutation(deleteHost, {
        onSuccess: () => {
            return queryClient.invalidateQueries("hosts")
        }
    })
}