import {useMutation, useQuery, useQueryClient} from "react-query";
import {useScoretrakApiClients} from "../contexts/ScoretrakApiClients";
import {
    DeleteRequest,
    GetAllRequest,
    Property,
    StoreRequest,
    UpdateRequest
} from "@scoretrak/scoretrakapis/scoretrak/property/v1/property_pb";
import grpcWeb from "grpc-web";


export function useProperties() {
    const {propertyServiceClient} = useScoretrakApiClients()

    async function fetchProperties() {
        const propertiesResponse = await propertyServiceClient.getAll(new GetAllRequest(), {})
        return propertiesResponse.getPropertiesList()
    }

    return useQuery<Property[], grpcWeb.RpcError>('properties', fetchProperties)
}

export function useAddProperty() {
    const queryClient = useQueryClient()
    const {propertyServiceClient} = useScoretrakApiClients()

    const addProperty = async (addPropertyRequest: StoreRequest) => {
        return await propertyServiceClient.store(addPropertyRequest, {})
    }

    return useMutation(addProperty, {
        onSuccess: () => {
            return queryClient.invalidateQueries("properties")
        }
    })
}

export function useUpdateProperty() {
    const queryClient = useQueryClient()
    const {propertyServiceClient} = useScoretrakApiClients()

    const updateProperty = async (updatePropertyRequest: UpdateRequest) => {
        return await propertyServiceClient.update(updatePropertyRequest, {})
    }

    return useMutation(updateProperty, {
        onSuccess: () => {
            return queryClient.invalidateQueries("properties")
        }
    })
}

export function useDeleteProperty() {
    const queryClient = useQueryClient()
    const {propertyServiceClient} = useScoretrakApiClients()

    const deleteProperty = async (deletePropertyRequest: DeleteRequest) => {
        return await propertyServiceClient.delete(deletePropertyRequest, {})
    }

    return useMutation(deleteProperty, {
        onSuccess: () => {
            return queryClient.invalidateQueries("properties")
        }
    })
}