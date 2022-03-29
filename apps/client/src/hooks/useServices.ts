import {useMutation, useQuery, useQueryClient} from "react-query";
import {useScoretrakApiClients} from "../contexts/ScoretrakApiClients";
import {GetAllRequest, Service} from "@scoretrak/scoretrakapis/scoretrak/service/v1/service_pb";
import grpcWeb from "grpc-web";
import {DeleteRequest, StoreRequest, UpdateRequest} from "@scoretrak/scoretrakapis/scoretrak/service/v1/service_pb";


export function useServices() {
    const {serviceServiceClient} = useScoretrakApiClients()

    async function fetchServices() {
        const servicesResponse = await serviceServiceClient.getAll(new GetAllRequest(), {})
        return servicesResponse.getServicesList()
    }

    return useQuery<Service[], grpcWeb.RpcError>('services', fetchServices)
}

export function useAddService() {
    const queryClient = useQueryClient()
    const {serviceServiceClient} = useScoretrakApiClients()

    const addService = async (addServiceRequest: StoreRequest) => {
        return await serviceServiceClient.store(addServiceRequest, {})
    }

    return useMutation(addService, {
        onSuccess: () => {
            return queryClient.invalidateQueries("services")
        }
    })
}

export function useUpdateService() {
    const queryClient = useQueryClient()
    const {serviceServiceClient} = useScoretrakApiClients()

    const updateService = async (updateServiceRequest: UpdateRequest) => {
        return await serviceServiceClient.update(updateServiceRequest, {})
    }

    return useMutation(updateService, {
        onSuccess: () => {
            return queryClient.invalidateQueries("services")
        }
    })
}

export function useDeleteService() {
    const queryClient = useQueryClient()
    const {serviceServiceClient} = useScoretrakApiClients()

    const deleteService = async (deleteServiceRequest: DeleteRequest) => {
        return await serviceServiceClient.delete(deleteServiceRequest, {})
    }

    return useMutation(deleteService, {
        onSuccess: () => {
            return queryClient.invalidateQueries("services")
        }
    })
}
