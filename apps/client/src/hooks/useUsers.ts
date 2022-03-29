import {
    DeleteRequest,
    GetAllRequest,
    GetByIDRequest,
    StoreRequest,
    UpdateRequest,
    User
} from "@scoretrak/scoretrakapis/scoretrak/user/v1/user_pb";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {useScoretrakApiClients} from "../contexts/ScoretrakApiClients";
import grpcWeb from "grpc-web";
import {UUID} from "@scoretrak/scoretrakapis/scoretrak/proto/v1/uuid_pb";


export function useUsers() {
    const {userServiceClient} = useScoretrakApiClients()

    async function fetchUsers() {
        const usersResponse = await userServiceClient.getAll(new GetAllRequest(), {})
        return usersResponse.getUsersList()
    }

    return useQuery<User[], grpcWeb.RpcError>('users', fetchUsers)
}

export function useUser(userId: string) {
    const {userServiceClient} = useScoretrakApiClients()

    async function fetchUserById(userId: string) {
        const uuid = new UUID()
        uuid.setValue(userId)
        const getByIdRequest = new GetByIDRequest()
        getByIdRequest.setId(uuid)
        const userResponse = await userServiceClient.getByID(getByIdRequest, {})
        return userResponse.getUser()!
    }

    return useQuery<User, grpcWeb.RpcError>(['users', userId], () => fetchUserById(userId))
}

export function useAddUser() {
    const queryClient = useQueryClient()
    const {userServiceClient} = useScoretrakApiClients()

    const addUser = async (addUserRequest: StoreRequest) => {
        return await userServiceClient.store(addUserRequest, {})
    }

    return useMutation(addUser,
        {
            onSuccess: () => {
                return queryClient.invalidateQueries('users')
            }
        })
}

export function useUpdateUser() {
    const queryClient = useQueryClient()
    const {userServiceClient} = useScoretrakApiClients()

    const updateUser = async (updateUserRequest: UpdateRequest) => {
        return await userServiceClient.update(updateUserRequest, {})
    }

    return useMutation(updateUser,
        {
            onSuccess: () => {
                return queryClient.invalidateQueries('users')
            }
        })
}

export function useDeleteUser() {
    const queryClient = useQueryClient()
    const {userServiceClient} = useScoretrakApiClients()

    const deleteUser = async (deleteUserRequest: DeleteRequest) => {
        return await userServiceClient.delete(deleteUserRequest, {})
    }

    return useMutation(deleteUser,
        {
            onSuccess: () => {
                return queryClient.invalidateQueries('users')
            }
        })
}
